import configureMockStore from "redux-mock-store";
import reduxThunk, { ThunkDispatch } from "redux-thunk";
import { Middleware, AnyAction } from "redux";

import {
  fetchItems,
  filterItems,
  unselectItem,
  selectItem,
  submitItems,
  loadMoreItems
} from "../index";
import {
  URL,
  FETCH_ITEMS_SUCCESS,
  FILTER_ITEMS,
  UNSELECT_ITEM,
  SELECT_ITEM,
  LOAD_MORE_ITEMS
} from "../../constants";

type DispatchExts = ThunkDispatch<{}, void, AnyAction>;

const middlewares: Array<Middleware> = [reduxThunk];
const mockStore = configureMockStore<{}, DispatchExts>(middlewares);
const mockSuccessResponse = { data: ["Movie", "Game"] };
const mockJsonPromise = Promise.resolve(mockSuccessResponse);
const mockFetchPromise = Promise.resolve({
  json: () => mockJsonPromise
});
const store = mockStore({
  items: {
    list: [
      { name: "selectedItem", selected: true, index: 0 },
      { name: "other item", selected: false, index: 1 }
    ]
  }
});
window.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

describe("actions", () => {
  beforeEach(() => {
    store.clearActions();
  });
  describe("fetchItems", () => {
    it("should call fetch to API and dispatch fetchItemsSuccess on success", () => {
      store.dispatch(fetchItems()).then(() => {
        expect(window.fetch).toBeCalledWith(URL);
        const actions = store.getActions();

        expect(actions).toHaveLength(1);
        expect(actions[0].type).toEqual(FETCH_ITEMS_SUCCESS);
        expect(actions[0].payload).toEqual(mockSuccessResponse.data);
      });
    });
  });
  describe("filterItems", () => {
    it("should have correct type and payload", () => {
      store.dispatch(filterItems("mo"));

      const actions = store.getActions();
      expect(actions).toHaveLength(1);
      expect(actions[0].type).toEqual(FILTER_ITEMS);
      expect(actions[0].payload).toEqual("mo");
    });
  });
  describe("unselectItem", () => {
    it("should have correct type and payload", () => {
      store.dispatch(unselectItem(5));

      const actions = store.getActions();
      expect(actions).toHaveLength(1);
      expect(actions[0].type).toEqual(UNSELECT_ITEM);
      expect(actions[0].payload).toEqual(5);
    });
  });
  describe("selectItem", () => {
    it("should have correct type and payload", () => {
      store.dispatch(selectItem(3));

      const actions = store.getActions();
      expect(actions).toHaveLength(1);
      expect(actions[0].type).toEqual(SELECT_ITEM);
      expect(actions[0].payload).toEqual(3);
    });
  });
  describe("submitItems", () => {
    it("should call fetch to API with selected items", () => {
      store.dispatch(submitItems()).then(() => {
        expect(window.fetch).toBeCalledWith(URL, {
          body: JSON.stringify(["selectedItem"]),
          method: "POST"
        });
      });
    });
  });
  describe("loadMoreItems", () => {
    it("should have correct type", () => {
      store.dispatch(loadMoreItems());

      const actions = store.getActions();
      expect(actions).toHaveLength(1);
      expect(actions[0].type).toEqual(LOAD_MORE_ITEMS);
    });
  });
});

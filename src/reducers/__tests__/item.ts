import reducer, { defaultState } from "../item";
import {
  FETCH_ITEMS_SUCCESS,
  SELECT_ITEM,
  UNSELECT_ITEM,
  FILTER_ITEMS
} from "../../constants";

describe("reducers/item", () => {
  it("should return default state for unknown actions", () => {
    expect(reducer(undefined, { type: "UNKNOWN" })).toBe(defaultState);
  });
  it("should handle FETCH_ITEMS_SUCCESS action", () => {
    const fetchedItems = ["Game of Thrones"];
    const newState = reducer(undefined, {
      type: FETCH_ITEMS_SUCCESS,
      payload: fetchedItems
    });

    expect(newState).toEqual({
      list: [
        {
          name: fetchedItems[0],
          index: 0,
          selected: false
        }
      ],
      filter: ""
    });
  });
  it("should handle SELECT_ITEM action", () => {
    const itemToSelect = {
      name: "Mission impossible",
      selected: false,
      index: 0
    };
    const state = {
      filter: "",
      list: [itemToSelect]
    };
    const newState = reducer(state, {
      type: SELECT_ITEM,
      payload: itemToSelect.index
    });

    expect(newState.list).toEqual([
      {
        ...itemToSelect,
        selected: true
      }
    ]);
  });
  it("should handle UNSELECT_ITEM action", () => {
    const itemToUnselect = {
      name: "Martian",
      selected: true,
      index: 0
    };
    const state = { list: [itemToUnselect], filter: "" };
    const newState = reducer(state, {
      type: UNSELECT_ITEM,
      payload: itemToUnselect.index
    });

    expect(newState.list).toEqual([
      {
        ...itemToUnselect,
        selected: false
      }
    ]);
  });
  it("should handle FILTER_ITEMS action", () => {
    const newState = reducer(undefined, { type: FILTER_ITEMS, payload: "fil" });

    expect(newState.filter).toEqual("fil");
  });
});

import {
  FETCH_ITEMS_SUCCESS,
  SELECT_ITEM,
  UNSELECT_ITEM,
  FILTER_ITEMS,
  ItemsState,
  LOAD_MORE_ITEMS,
  CLEAR_CART
} from "../constants";

export const defaultState: ItemsState = {
  filter: "",
  list: [],
  limit: 10
};

const ItemsReducer = (state = defaultState, action: any): ItemsState => {
  switch (action.type) {
    case FETCH_ITEMS_SUCCESS:
      const list = action.payload.map((itemName: string, index: number) => ({
        name: itemName.replace(/&amp;/g, "&").replace(/&#x27;/g, "'"),
        selected: localStorage.getItem(`item-${index}`) === "selected",
        index
      }));

      return {
        ...state,
        list,
        filter: ""
      };
    case SELECT_ITEM:
      const itemsAfterSelect = state.list.slice();

      itemsAfterSelect[action.payload].selected = true;

      return {
        ...state,
        list: itemsAfterSelect
      };
    case UNSELECT_ITEM:
      const itemsAfterUnselect = state.list.slice();

      itemsAfterUnselect[action.payload].selected = false;

      return {
        ...state,
        list: itemsAfterUnselect
      };
    case FILTER_ITEMS:
      return {
        ...state,
        filter: action.payload
      };
    case LOAD_MORE_ITEMS:
      return {
        ...state,
        limit: state.limit + 10
      };
    case CLEAR_CART:
      return {
        ...state,
        list: state.list.map(el => {
          localStorage.setItem(`item-${el.index}`, "unselected");
          return { ...el, selected: false };
        })
      };
    default:
      return state;
  }
};

export default ItemsReducer;

export const FETCH_ITEMS_SUCCESS = "FETCH_ITEMS_SUCCESS";
export const SELECT_ITEM = "SELECT_ITEM";
export const UNSELECT_ITEM = "UNSELECT_ITEM";
export const FILTER_ITEMS = "FILTER_ITEMS";
export const LOAD_MORE_ITEMS = "LOAD_MORE_ITEMS";
export const URL = "http://127.0.0.1:3090/";
// used to calculate when to load more items
export const LIST_ITEM_HEIGHT = 40.969;
const itemData = require("../assets/items.json");
export const TOTAL_ITEMS = itemData.data.length;
export const SHOW_MESSAGE = "SHOW_MESSAGE";
export const HIDE_MESSAGE = "HIDE_MESSAGE";
export const CLEAR_CART = "CLEAR_CART";

export interface Item {
  name: string;
  selected: boolean;
  index: number;
}

export interface ItemsState {
  list: Item[];
  filter: string;
  limit: number;
}

export interface RootState {
  items: ItemsState;
  message: string;
}

export const COLORS = {
  blue: "#1565C0",
  white: "#FFFFFF",
  darkGrey: "#E0E0E0",
  lightGrey: "#FAFAFA"
};

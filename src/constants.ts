export const FETCH_ITEMS_SUCCESS = "FETCH_ITEMS_SUCCESS";
export const SELECT_ITEM = "SELECT_ITEM";
export const UNSELECT_ITEM = "UNSELECT_ITEM";
export const FILTER_ITEMS = "FILTER_ITEMS";
export const URL = "http://127.0.0.1:3090/";

export interface Item {
  name: string;
  selected: boolean;
  index: number;
}

export interface RootState {
  items: {
    list: Item[];
    filter: string;
  };
}

export const COLORS = {
  blue: "#1565C0",
  white: "#FFFFFF",
  darkGrey: "#E0E0E0",
  lightGrey: "#FAFAFA"
};

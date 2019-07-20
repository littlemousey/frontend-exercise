import {
  FETCH_ITEMS_SUCCESS,
  SELECT_ITEM,
  UNSELECT_ITEM,
  FILTER_ITEMS,
  Item
} from "../constants";

interface ItemsState {
  list: Item[];
  filter: string;
}

export const defaultState: ItemsState = {
  filter: "",
  list: []
};

const ItemsReducer = (state = defaultState, action: any): ItemsState => {
  switch (action.type) {
    case FETCH_ITEMS_SUCCESS:
      const list = action.payload.map((itemName: string, index: number) => ({
        name: itemName.replace(/&amp;/g, "&").replace(/&#x27;/g, "'"),
        selected: false,
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

    default:
      return state;
  }
};

export default ItemsReducer;

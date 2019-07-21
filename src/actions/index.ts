import { Dispatch } from "react";

import {
  Item,
  FETCH_ITEMS_SUCCESS,
  SELECT_ITEM,
  UNSELECT_ITEM,
  FILTER_ITEMS,
  URL,
  RootState,
  LOAD_MORE_ITEMS
} from "../constants";

const fetchItemsSuccess = (items: Item[]) => ({
  type: FETCH_ITEMS_SUCCESS,
  payload: items
});

export const selectItem = (index: number) => ({
  type: SELECT_ITEM,
  payload: index
});

export const unselectItem = (index: number) => ({
  type: UNSELECT_ITEM,
  payload: index
});

export const filterItems = (query: string) => ({
  type: FILTER_ITEMS,
  payload: query
});

export const loadMoreItems = () => ({
  type: LOAD_MORE_ITEMS
});

export const fetchItems = () => (dispatch: Dispatch<any>) => {
  return fetch(URL)
    .then(response => response.json())
    .then(response => response.data)
    .then(data => {
      dispatch(fetchItemsSuccess(data));
    });
};

export const submitItems = () => (
  _dispatch: Dispatch<any>,
  getState: () => RootState
) => {
  const {
    items: { list }
  } = getState();
  const selectedItems = list
    .filter(item => item.selected === true)
    .map(item => item.name);

  return fetch(URL, {
    method: "POST",
    body: JSON.stringify(selectedItems)
  });
};

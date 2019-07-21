import { Dispatch } from "react";

import {
  Item,
  FETCH_ITEMS_SUCCESS,
  SELECT_ITEM,
  UNSELECT_ITEM,
  FILTER_ITEMS,
  URL,
  RootState,
  LOAD_MORE_ITEMS,
  SHOW_MESSAGE,
  HIDE_MESSAGE,
  CLEAR_CART
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

const showMessage = (message: string) => ({
  type: SHOW_MESSAGE,
  payload: message
});

const hideMessage = () => ({
  type: HIDE_MESSAGE
});

const clearCart = () => ({
  type: CLEAR_CART
});

export const fetchItems = () => (dispatch: Dispatch<any>) => {
  return fetch(URL)
    .then(response => response.json())
    .then(response => response.data)
    .then(data => {
      dispatch(fetchItemsSuccess(data));
    })
    .catch(() => {
      dispatch(
        showMessage(
          "Could not fetch items. Please make sure server is up by running 'node server.js'"
        )
      );
    });
};

export const submitItems = () => (
  dispatch: Dispatch<any>,
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
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Error response");
      }
    })
    .then(() => {
      dispatch(clearCart());
      dispatch(
        showMessage(
          `Successfully submitted items: ${selectedItems.join(
            ", "
          )}. Your cart is cleared`
        )
      );
      setTimeout(() => {
        dispatch(hideMessage());
      }, 2000);
    })
    .catch(() => {
      dispatch(
        showMessage("Error: Selected items could not be submitted. Try again")
      );
    });
};

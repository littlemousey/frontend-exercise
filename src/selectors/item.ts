import { RootState } from "../constants";

export const getItemsList = (state: RootState) => state.items.list;

export const hasSelectedItem = (state: RootState) =>
  Boolean(getItemsList(state).find(item => item.selected === true));

export const getLimit = (state: RootState) => state.items.limit;

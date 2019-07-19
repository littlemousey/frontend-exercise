import { RootState } from "../constants";

export const getItemsList = (state: RootState) => state.items.list;

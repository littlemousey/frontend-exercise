import { combineReducers } from "redux";

import ItemsReducer from "./item";

const RootReducer = combineReducers({
  items: ItemsReducer
});

export default RootReducer;

import { combineReducers } from "redux";

import ItemReducer from "./item";

const RootReducer = combineReducers({
  item: ItemReducer
});

export default RootReducer;

import { combineReducers } from "redux";

import ItemsReducer from "./item";
import MessageReducer from "./message";

const RootReducer = combineReducers({
  items: ItemsReducer,
  message: MessageReducer
});

export default RootReducer;

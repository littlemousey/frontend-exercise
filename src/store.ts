import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import RootReducer from "./reducers";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const configureStore = () => {
  return createStoreWithMiddleware(
    RootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  );
};

export default configureStore;

import { SHOW_MESSAGE, HIDE_MESSAGE } from "../constants";

const MessageReducer = (state = "", action: any): string => {
  switch (action.type) {
    case SHOW_MESSAGE:
      return action.payload;
    case HIDE_MESSAGE:
      return "";
    default:
      return state;
  }
};

export default MessageReducer;

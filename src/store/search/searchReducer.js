import { CHANGE_SEARCH } from "./searchConst";
import { CLEAR_SEARCH } from "./searchConst";

export const searchReducer = (state = "", action) => {
  switch (action.type) {
    case CHANGE_SEARCH:
      return action.payload;

    case CLEAR_SEARCH:
      return "";

    default:
      return state;
  }
};

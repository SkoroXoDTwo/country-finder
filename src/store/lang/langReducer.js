import { CHANGE_LANG } from "./langConst";

export const langReducer = (state = "en", action) => {
  switch (action.type) {
    case CHANGE_LANG:

      return action.payload;
    default:
      return state;
  }
};

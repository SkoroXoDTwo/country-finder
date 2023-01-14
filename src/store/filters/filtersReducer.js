import { CHANGE_FILTERS } from "./filtersConst";

export const filtersReducer = (state = "all", action) => {
  switch (action.type) {
    case CHANGE_FILTERS:
      return action.payload;
    default:
      return state;
  }
};

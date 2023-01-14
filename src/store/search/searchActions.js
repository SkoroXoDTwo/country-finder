import { CHANGE_SEARCH } from "./searchConst";
import { CLEAR_SEARCH } from "./searchConst";

export const changeSearch = (value) => ({
  type: CHANGE_SEARCH,
  payload: value,
});

export const clearSearch = () => ({
  type: CLEAR_SEARCH,
});

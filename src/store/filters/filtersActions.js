import { CHANGE_FILTERS } from "./filtersConst";

export const changeFilter = (value) => ({
  type: CHANGE_FILTERS,
  payload: value,
});

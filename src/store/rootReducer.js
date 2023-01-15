import { combineReducers } from "redux";
import { themeReducer } from "./theme/themeReducer";
import { searchReducer } from "./search/searchReducer";
import { filtersReducer } from "./filters/filtersReducer";
import { countriesReducer } from "./countries/countriesReducer";
import { detailsReducer } from "./details/detailsReducer";

export const rootReducer = combineReducers({
  theme: themeReducer,
  search: searchReducer,
  filter: filtersReducer,
  countries: countriesReducer,
  details: detailsReducer,
});

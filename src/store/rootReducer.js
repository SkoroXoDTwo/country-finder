import { combineReducers } from "redux";
import { themeReducer } from "./theme/themeReducer";
import { searchReducer } from "./search/searchReducer";
import { filtersReducer } from "./filters/filtersReducer";
import { countriesReducer } from "./countries/countriesReducer";
import { detailsReducer } from "./details/detailsReducer";
import { langReducer } from "./lang/langReducer";

export const rootReducer = combineReducers({
  theme: themeReducer,
  lang: langReducer,
  search: searchReducer,
  filter: filtersReducer,
  countries: countriesReducer,
  details: detailsReducer,
});

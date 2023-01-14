import { ADD_COUNTRIES, SET_LOADING, SET_ERROR } from "./countriesConst";
import api from "../../utils/Api";

const addCountries = (data) => ({
  type: ADD_COUNTRIES,
  payload: data,
});

const setLoading = () => ({
  type: SET_LOADING,
});

const setError = (err) => ({
  type: SET_ERROR,
  payload: err,
});

export const loadCountries = () => (dispath) => {
  dispath(setLoading());

  api
    .getCountries()
    .then((data) => {
      dispath(addCountries(data));
    })
    .catch((err) => {
      dispath(setError(err));
    });
};

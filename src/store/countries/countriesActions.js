import { ADD_COUNTRIES, SET_LOADING, SET_ERROR } from "./countriesConst";
import api from "../../utils/Api";
import { putCommasInNumber } from "../../utils/putCommasInNumber";

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
      data.forEach((country) => {
        country.populationNumber = country.population;
        country.population = putCommasInNumber(country.population);
      });
      dispath(addCountries(data));
    })
    .catch((err) => {
      dispath(setError(err));
    });
};

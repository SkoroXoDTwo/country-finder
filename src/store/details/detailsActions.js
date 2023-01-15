import { ADD_DETAILS, SET_LOADING, SET_ERROR } from "./detailsConst";
import api from "../../utils/Api";
import { putCommasInNumber } from "../../utils/putCommasInNumber";

const addDetails = (data) => ({
  type: ADD_DETAILS,
  payload: data,
});

const setLoading = () => ({
  type: SET_LOADING,
});

const setError = (err) => ({
  type: SET_ERROR,
  payload: err,
});

export const loadDetails = (name) => (dispath) => {
  console.log("load");
  dispath(setLoading());

  api
    .getDetails(name)
    .then((data) => {
      data[0].currencies = data[0].currencies[0].name;
      data[0].populationNumber = data[0].population;
      data[0].population = putCommasInNumber(data[0].population);
      data[0].languages = data[0].languages.reduce(
        (str, current) =>
          str === "" ? current.name : str + ", " + current.name,
        ""
      );

      console.log(data[0].languages);
      dispath(addDetails(data[0]));
    })
    .catch((err) => {
      dispath(setError(err));
    });
};

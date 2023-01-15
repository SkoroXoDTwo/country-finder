import { ADD_DETAILS, SET_LOADING, SET_ERROR } from "./detailsConst";
import api from "../../utils/Api";

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
  console.log('load')
  dispath(setLoading());

  api
    .getDetails(name)
    .then((data) => {
      dispath(addDetails(data[0]));
    })
    .catch((err) => {
      dispath(setError(err));
    });
};

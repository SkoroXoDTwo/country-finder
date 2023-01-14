import { ADD_COUNTRIES, SET_LOADING, SET_ERROR } from "./countriesConst";

const initialState = {
  status: "idle",
  error: null,
  list: [],
};

export const countriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_COUNTRIES:
      return {
        ...state,
        status: "received",
        list: payload,
      };

    case SET_LOADING:
      return {
        ...state,
        status: "loading",
        error: null,
      };

    case SET_ERROR:
      return {
        ...state,
        status: "rejected",
        error: payload,
      };

    default:
      return state;
  }
};

import {
  ADD_DETAILS,
  SET_LOADING,
  SET_ERROR,
  ADD_NEIGBORS,
} from "./detailsConst";

const initialState = {
  status: "idle",
  error: null,
  currentCountry: null,
  neigbors: null,
};

export const detailsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_DETAILS:
      return {
        ...state,
        status: "received",
        currentCountry: payload,
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

    case ADD_NEIGBORS:
      return {
        ...state,
        neigbors: payload
      }

    default:
      return state;
  }
};

import { ADD_FILM } from "../actionTypes/films";

// action.js
export const addCounter = (newData) => {
  return {
    type: "SET_NEW_DATA",
    payload: newData,
  };
};

export const dicreaseCounter = (payload) => {
  return {
    type: ADD_FILM,
    payload,
  };
};

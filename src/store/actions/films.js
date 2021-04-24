import { SET_FILMS, SET_LOADING } from "../actionTypes/films.js";

export const createSetFilmsAction = (payload) => {
  return {
    type: SET_FILMS,
    payload,
  };
};

export const createSetLoadingAction = (payload) => {
  return {
    type: SET_LOADING,
    payload,
  };
};

export const requestFilms = (url = "http://api.tvmaze.com/shows?page=1") => (
  dispatch
) => {
  dispatch(createSetLoadingAction(true));
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      dispatch(createSetLoadingAction(false));
      dispatch(createSetFilmsAction(data));
    });
};

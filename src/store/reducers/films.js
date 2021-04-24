import { SET_FILMS, SET_LOADING } from "../actionTypes/films.js";

const initialState = {
  data: [],
  isLoading: false,
};

export default function filmsReducer(state = initialState, { payload, type }) {
  switch (type) {
    case SET_FILMS:
      return {
        ...state,
        data: [...payload],
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };

    default:
      return state;
  }
}

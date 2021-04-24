import { SET_SIGNUP_DATA } from "../actionsTypes/actionsTypes.js";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

export default function signUp(state = initialState, { payload, type }) {
  switch (type) {
    case SET_SIGNUP_DATA:
      return {
        ...payload,
      };
    default:
      return state;
  }
}

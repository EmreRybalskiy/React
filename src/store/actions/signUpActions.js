import { SET_SIGNUP_DATA } from "../actionsTypes/actionsTypes.js";

export const createSetSignUpDataAction = (payload) => {
  return {
    type: SET_SIGNUP_DATA,
    payload,
  };
};

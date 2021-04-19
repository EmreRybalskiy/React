// rootReducer.js

import films2 from "./reducers/dataReducer.js";
import { combineReducers } from "redux";

export default combineReducers({
  films2,
  // тут будут все остальные редьюсеры
});

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCounter, dicreaseCounter } from "../store/actions/actions.js";

export const Test = () => {
  const dispatcher = useDispatch();
  const data = useSelector(({ films2: { data } }) => data);

  const test = () => {
    dispatcher(addCounter(5));
  };

  const decreaseConter = () => {
    dispatcher(1);
  };

  return (
    <div>
      <button onClick={test}>Hello</button>
      <button onClick={decreaseConter}>Decrease</button>
      <div>{data}</div>
    </div>
  );
};

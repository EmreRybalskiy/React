const initialState = {
  data: 5,
  b: "1",
  name: "Emre",
};

export default function films2(state = initialState, action) {
  switch (action.type) {
    case "SET_NEW_DATA":
      return {
        ...state,
        data: action.payload,
        b: state.b + 5,
      };
    case "DICREASE_COUNTER":
      return {
        ...state,
        data: state.data - action.payload,
      };
    default:
      return state;
  }
}

export const films = (api) => (dispatch) => {
  dispatch(setLoading(true));

  fetch(api)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      dispatch(getDataSuccess(data));
    });
};

import axios from "axios";

export const FETCH_BREED_START = "FETCH_BREED_START";
export const FETCH_BREED_SUCCESS = "FETCH_BREED_SUCCESS";
export const FETCH_BREED_FAIL = "FETCH_BREED_FAIL";
export const UPDATE_BREED = "UPDATE_BREED";

export const fetchBreed = (e, breed) => dispatch => {
  e.preventDefault();
  dispatch({ type: FETCH_BREED_START });
  axios
    .get(`https://dog.ceo/api/breed/${breed}/images`)
    .then(res =>
      dispatch({ type: FETCH_BREED_SUCCESS, payload: res.data.message })
    )
    .catch(err => dispatch({ type: FETCH_BREED_FAIL, payload: err }));
};

export const updateBreed = breed => dispatch => {
  dispatch({ type: UPDATE_BREED, payload: breed });
};

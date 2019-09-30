import axios from "axios";

export const FETCH_ALL_BREEDS_START = "FETCH_ALL_BREEDS_START";
export const FETCH_ALL_BREEDS_SUCCESS = "FETCH_ALL_BREEDS_SUCCESS";
export const FETCH_ALL_BREEDS_FAIL = "FETCH_ALL_BREEDS_FAIL";
export const FETCH_BREED_START = "FETCH_BREED_START";
export const FETCH_BREED_SUCCESS = "FETCH_BREED_SUCCESS";
export const FETCH_BREED_FAIL = "FETCH_BREED_FAIL";

export const fetchAllBreeds = () => dispatch => {
  dispatch({ type: FETCH_ALL_BREEDS_START });

  axios
    .get("https://dog.ceo/api/breeds/list/all")
    .then(res =>
      dispatch({
        type: FETCH_ALL_BREEDS_SUCCESS,
        payload: Object.keys(res.data.message)
      })
    )
    .catch(err => dispatch({ type: FETCH_ALL_BREEDS_FAIL, payload: err }));
};

export const fetchBreed = breed => dispatch => {
  console.log("aj: reducer: fetchBreed: breed: ", breed, typeof breed);
  if (breed === "0") {
    dispatch({ type: FETCH_BREED_SUCCESS, payload: [] });
    return;
  } else dispatch({ type: FETCH_BREED_START, payload: breed });

  axios
    .get(`https://dog.ceo/api/breed/${breed}/images`)
    .then(res =>
      dispatch({ type: FETCH_BREED_SUCCESS, payload: res.data.message })
    )
    .catch(err => dispatch({ type: FETCH_BREED_FAIL, payload: err }));
};

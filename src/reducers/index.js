import {
  FETCH_ALL_BREEDS_START,
  FETCH_ALL_BREEDS_SUCCESS,
  FETCH_ALL_BREEDS_FAIL,
  FETCH_BREED_START,
  FETCH_BREED_SUCCESS,
  FETCH_BREED_FAIL
} from "actions";

import { initialState } from "stores";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_BREEDS_START:
      return state;
    case FETCH_ALL_BREEDS_SUCCESS:
      return { ...state, allBreeds: action.payload };
    case FETCH_ALL_BREEDS_FAIL:
      return { ...state, err: action.payload };
    case FETCH_BREED_START:
      return { ...state, isLoading: true };
    case FETCH_BREED_SUCCESS:
      return { ...state, images: action.payload, isLoading: false, err: "" };
    case FETCH_BREED_FAIL:
      return {
        ...state,
        images: [],
        isLoading: false,
        err:
          "Sorry, we don't have this dog breed in our database. Check again later!"
      };
    default:
      return state;
  }
};

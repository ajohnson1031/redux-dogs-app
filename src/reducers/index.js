import React from "react";
import {
  FETCH_BREED_START,
  FETCH_BREED_SUCCESS,
  FETCH_BREED_FAIL,
  UPDATE_BREED
} from "actions";

import { initialState } from "stores";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BREED:
      return { ...state, breed: action.payload, err: null };
    case FETCH_BREED_START:
      return { ...state, breed: state.breed, isLoading: true };
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

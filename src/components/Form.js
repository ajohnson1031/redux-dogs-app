import React from "react";
import { directive } from "@babel/types";

const Form = ({ state, fetchBreed, updateBreed }) => {
  return (
    <>
      <h1>Dog Breed Search Engine</h1>
      <form action="">
        <input
          type="text"
          name="breed"
          value={state.breed}
          onChange={e => updateBreed(e.target.value)}
          placeholder="Enter desired breed..."
        />
        <button onClick={e => fetchBreed(e, state.breed)}>Search</button>
      </form>
      {state.err && <div className="err">{state.err}</div>}
    </>
  );
};

export default Form;

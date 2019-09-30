import React, { useEffect } from "react";

const Form = ({ state, fetchBreed, fetchAllBreeds }) => {
  useEffect(() => {
    fetchAllBreeds();
  }, [fetchAllBreeds]);
  return (
    <>
      <h1>Dog Breed Image Database</h1>
      <form action="">
        <select onChange={e => fetchBreed(e.target.value)}>
          <option value={0}>Select Dog Breed...</option>
          {state.allBreeds.map((breed, i) => (
            <option key={i} value={breed}>
              {breed[0].toUpperCase() + breed.substr(1)}
            </option>
          ))}
        </select>
      </form>
      {state.err && <div className="err">{state.err}</div>}
    </>
  );
};

export default Form;

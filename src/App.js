import React from "react";
import { connect } from "react-redux";
import Form from "components/Form";
import DogList from "components/DogList";
import { fetchBreed, fetchAllBreeds } from "actions";

function App({ state, fetchBreed, fetchAllBreeds }) {
  return (
    <div className="App">
      <Form
        state={state}
        fetchBreed={fetchBreed}
        fetchAllBreeds={fetchAllBreeds}
      />
      <DogList images={state.images} />
    </div>
  );
}

const mapStateToProps = state => ({ state: state });

export default connect(
  mapStateToProps,
  { fetchBreed, fetchAllBreeds }
)(App);

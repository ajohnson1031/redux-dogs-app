import React from "react";
import { connect } from "react-redux";
import Form from "components/Form";
import DogList from "components/DogList";
import { fetchBreed, updateBreed } from "actions";

function App({ state, fetchBreed, updateBreed }) {
  return (
    <div className="App">
      <Form state={state} fetchBreed={fetchBreed} updateBreed={updateBreed} />
      <DogList images={state.images} />
    </div>
  );
}

const mapStateToProps = state => ({ state: state });

export default connect(
  mapStateToProps,
  { fetchBreed, updateBreed }
)(App);

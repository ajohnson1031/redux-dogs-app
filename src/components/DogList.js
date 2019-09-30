import React from "react";
import DogImg from "components/DogImg";

const DogList = ({ images }) => {
  return (
    <div className="dog-container">
      {images.map((img, i) => {
        return <DogImg key={i} image={img} />;
      })}
    </div>
  );
};

export default DogList;

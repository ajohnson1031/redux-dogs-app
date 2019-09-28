import React from "react";
import DogImg from "components/DogImg";

const DogList = ({ images }) => {
  return (
    <div className="dog-container">
      {images.map(img => {
        return <DogImg image={img} />;
      })}
    </div>
  );
};

export default DogList;

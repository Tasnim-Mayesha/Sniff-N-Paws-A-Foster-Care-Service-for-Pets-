import React, { useState } from "react";
import img1 from "../../assets/images/kitty-g3d21a21e7_1280.png";
import img2 from "../../assets/images/dog-g2a11e8ca4_1280-removebg-preview.png";
import img3 from "../../assets/images/bunny-g5c4a5df10_1280-removebg-preview.png";

const CardComponent = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Toggle flip state on hover
  const handleHover = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`relative w-96 h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card ${
        isFlipped ? "flipped" : ""
      }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className=" w-full h-full flex justify-center items-center  transition-all duration-100 delay-200 z-20 hover:opacity-0">
        <img src={img1} alt="Front of Card" />
      </div>
      <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-blue-50 transition-all z-10 card-back text-blue-800 text-justify p-7">
        <p>
          Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has
          been the Lorem Ipsum is simply dummy printing and typesetting indust
          Ipsum has been the
        </p>
      </div>
    </div>
  );
};

export default CardComponent;

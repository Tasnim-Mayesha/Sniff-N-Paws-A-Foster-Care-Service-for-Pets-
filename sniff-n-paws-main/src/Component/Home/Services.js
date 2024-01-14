import React from "react";
import img1 from "../../assets/images/kitty-g3d21a21e7_1280.png";
import img2 from "../../assets/images/dog-g2a11e8ca4_1280-removebg-preview.png";
import img3 from "../../assets/images/bunny-g5c4a5df10_1280-removebg-preview.png";

const Services = () => {
  return (
    <div className="pt-32">
      <h1 className="font-extrabold text-center text-5xl text-blue-700 uppercase">
        Our Services
      </h1>
      <div className="flex p-28 space-x-40">
        <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
          <img
            src={img1}
            class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
            alt="Louvre"
          />
        </div>
        <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
          <img
            src={img2}
            class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
            alt="Louvre"
          />
        </div>
        <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
          <img
            src={img3}
            class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
            alt="Louvre"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;

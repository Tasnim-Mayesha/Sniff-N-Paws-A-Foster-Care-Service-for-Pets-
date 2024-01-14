import React from "react";
import img from "../../assets/images/pets-g1111451cc_1280-removebg-preview.png";
import img1 from "../../assets/images/rabbit-removebg-preview.png";
import { TypeAnimation } from "react-type-animation";
import bg from "../../assets/images/output-onlinepngtools_1.png";
import bg1 from "../../assets/images/output-onlinepngtools222.png";

const Banner = () => {
  return (
    <div>
      <h1 className="w-full h-full border-8 border-blue-100 text-blue-800 pt-10 p-10 font-serif font-extrabold text-center text-5xl bg-blue-50">
        <TypeAnimation
          sequence={[
            "SNIFF-N-PAWS",
            2000,
            "We care for your pets",
            2000,
            "We serve your rabbits, dogs & cats",
            2000,
          ]}
          speed={50}
          className="text-blue-900"
          wrapper="span"
          repeat={Infinity}
        />
      </h1>
      <div className="flex">
        <img
          className="w-1/2 justify-start border-l-8 border-r-8 border-b-8 border-blue-100 bg-blue-50"
          src={img}
          alt=""
        ></img>
        <h1
          // style={{
          //   background: `url(${bg})`,
          //   backgroundSize: "cover",
          // }}
          className="uppercase font-mono justify-end text-center px-56 py-44 text-2xl font-black text-blue-800"
        >
          We care for your pets
        </h1>
      </div>
      <div className=" flex justify-end">
        <h1
          // style={{
          //   background: `url(${bg1})`,
          //   backgroundSize: "cover",
          // }}
          className="uppercase font-mono text-center  px-36 py-44  text-2xl font-black text-blue-800"
        >
          We serve your rabbits, dogs & cats
        </h1>
        <img
          className="w-1/2 bg-blue-50 border-8 border-blue-100"
          src={img1}
          alt=""
        ></img>
      </div>
    </div>
  );
};

export default Banner;

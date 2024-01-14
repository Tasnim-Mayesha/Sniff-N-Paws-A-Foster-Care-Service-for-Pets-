import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const ServiceCards = ({ service }) => {
  const { _id, name, description, img } = service;
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      data-aos="fade-down"
      className="card w-96 bg-slate-50 border-blue-950 shadow-lg"
    >
      <figure className="px-10 pt-10">
        <img
          height={116}
          width={115}
          src={img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center" data-aos="fade-down">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        {/* <div className="grid grid-cols-2 gap-4">
          <button className="btn btn-sm bg-blue-100 max-w-xs btn-outline font-semibold text-blue-700">
            <Link className="text-blue-700" to="/loginView">
              login
            </Link>
          </button>
          <button className="btn btn-sm bg-blue-100 max-w-xs btn-outline font-semibold text-blue-700">
            <Link className="text-blue-700" to="/donate">
              donate
            </Link>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ServiceCards;

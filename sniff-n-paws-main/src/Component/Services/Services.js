import React, { useEffect } from "react";
import img1 from "../../assets/images/fostercat1.jpg";
import img2 from "../../assets/images/fosterdog1.jpg";
import img3 from "../../assets/images/fosterRabbit1.jpg";
import img4 from "../../assets/images/fostercat2.jpg";
import img5 from "../../assets/images/fosterDog2.jpg";
import img6 from "../../assets/images/fosterRabbit2.jpg";
import ServiceCards from "./ServiceCards";
import bg from "../../assets/images/output7.png";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Cat adoption",
      img: img1,
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      _id: 2,
      name: "Dog adoption",
      img: img2,
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      _id: 3,
      name: "Rabbit adoption",
      img: img3,
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      _id: 4,
      name: "Cat adoption",
      img: img4,
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      _id: 5,
      name: "Dog adoption",
      img: img5,
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      _id: 6,
      name: "Rabbit adoption",
      img: img6,
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <div>
      <div
        style={{
          background: `url(${bg})`,
          backgroundSize: "cover",
        }}
        className="p-28 gap-10"
      >
        <div className="text-center">
          <h3 className="text-blue-800 font-black text-2xl">OUR SERVICES</h3>
        </div>
        <div className="grid grid-cols-3 px-20 pt-20 gap-10 ">
          {services.map((service) => (
            <ServiceCards key={services._id} service={service}></ServiceCards>
          ))}
        </div>
        <div className="grid grid-cols-3 px-20 pt-20 gap-10">
          {services.map((service) => (
            <ServiceCards key={services._id} service={service}></ServiceCards>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

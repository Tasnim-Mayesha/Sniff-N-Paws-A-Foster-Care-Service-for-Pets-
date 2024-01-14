import React from "react";
import img from "../../assets/images/favicon.ico";

const About = () => {
  return (
    <div className="pt-7 pb-48 ">
      <h4 className="mt-4 p-8  w-full h-full font-extrabold text-center text-4xl text-blue-700">
        About <img className="mx-auto" src={img} alt="" />
      </h4>
      <p className="mt-4 pt-2 ms-2 me-2 p-7 text-justify text-lg font-bold">
        The core features of this project are categorized into three types or
        privileges given to the admin, staffs or veterinarian and the customers
        respectively. They are as follows:
        <p>
          <small className="text-justify text-2xl font-extrabold text-blue-700">
            1. Admin Privileges:
          </small>
          <li className="text-justify text-sm font-bold">
            Monitoring the entire system and its employees.
          </li>{" "}
          <li className="text-justify text-sm font-bold">Managing records.</li>
          <li className="text-justify text-sm font-bold">
            Making changes and updates to the system.
          </li>{" "}
          <li className="text-justify text-sm font-bold">
            Managing donations and sponsorships.
          </li>{" "}
          <li className="text-justify text-sm font-bold">
            Managing prices and service rates.
          </li>
        </p>
        <p>
          <small className="text-justify text-2xl font-extrabold text-blue-700">
            2. Staff Privileges/ Features:
          </small>
          <li className="text-justify text-sm font-bold">
            {" "}
            Accessing customer/ adopter information.
          </li>{" "}
          <li className="text-justify text-sm font-bold">
            Overseeing adoptions.
          </li>
          <li className="text-justify text-sm font-bold">
            Providing online supports to customers.{" "}
          </li>{" "}
          <li className="text-justify text-sm font-bold">
            Updating information to the site.
          </li>{" "}
          <li className="text-justify text-sm font-bold">
            {" "}
            Overseeing Day-care services.
          </li>
        </p>
        <p>
          <small className="text-justify text-2xl font-extrabold text-blue-700">
            3. Customer Privileges:
          </small>
          <li className="text-justify text-sm font-bold">
            Customers can have their own profile that will keep track of their
            history with the organization.
          </li>{" "}
          <li className="text-justify text-sm font-bold">
            Browsing pets based on their mentioned criteria.
          </li>
          <li className="text-justify text-sm font-bold">
            Donating through the website for the organization’s cause.
          </li>{" "}
          <li className="text-justify text-sm font-bold">
            Consulting with the management through customer care.{" "}
          </li>{" "}
          <li className="text-justify text-sm font-bold">
            {" "}
            Choosing whether to provide a foster home or adopt.
          </li>
        </p>
      </p>
    </div>
  );
};

export default About;

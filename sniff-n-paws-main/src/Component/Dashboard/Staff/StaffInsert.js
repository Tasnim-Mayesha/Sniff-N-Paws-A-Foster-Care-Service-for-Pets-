/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../Dashboard";

const StaffInsert = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    city: "",
    street: "",
    house: "",
    dob: "",
    salary: "",
    phone: "",
    specialization: "",
  });
  //const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.toString() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send the formData to the backend for further processing
    //console.log(formData);
    // TODO: Send the formData to the backend API for insertion
    let adminUrl = `http://localhost:3002/staff_insert/${formData.name}/${formData.email}/${formData.gender}/${formData.city}/${formData.street}/${formData.house}/${formData.dob}/${formData.salary}/${formData.specialization}/${formData.phone}`;
    fetch(adminUrl);
    //navigate("/dashboard");"/staff_insert/:name/:email/:gender/:city/:street/:house/:dob/:salary/:specialization/:phone
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl text-blue-700 uppercase font-bold">
            Add Staff
          </h2>
          <form onSubmit={handleSubmit}>
            <div>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input input-bordered input-sm w-full max-w-xs"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  className="input input-bordered input-sm  w-full max-w-xs"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="gender">Gender:</label>
                <input
                  type="text"
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  className="input input-bordered input-sm w-full max-w-xs"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  className="input input-bordered input-sm w-full max-w-xs"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="street">Street:</label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  className="input input-bordered input-sm w-full max-w-xs"
                  value={formData.street}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <div>
                  <label htmlFor="house">House:</label>
                  <input
                    type="text"
                    id="house"
                    name="house"
                    className="input input-bordered input-sm w-full max-w-xs"
                    value={formData.house}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="house">Phone:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="input input-bordered input-sm w-full max-w-xs"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <div>
                <label htmlFor="dob">Date of Birth:</label>
                <input
                  type="text"
                  id="dob"
                  name="dob"
                  className="input input-bordered input-sm w-full max-w-xs"
                  value={formData.dob}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="salary">Salary</label>
                <input
                  type="text"
                  id="salary"
                  name="salary"
                  className="input input-bordered input-sm w-full max-w-xs"
                  value={formData.salary}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="specialization">Specialization:</label>
                <input
                  type="text"
                  id="specialization"
                  name="specialization"
                  className="input input-bordered input-sm w-full max-w-xs"
                  value={formData.specialization}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="pt-4">
              <button
                className="btn btn-accent w-full max-w-xs btn-outline font-semibold text-blue-200"
                type="submit"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StaffInsert;

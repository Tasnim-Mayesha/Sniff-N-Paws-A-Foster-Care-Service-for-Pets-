/* eslint-disable no-restricted-globals */
import React, { useState } from "react";

const RescuedInsert = () => {
  const [formData, setFormData] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.toString() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let adminUrl = `http://localhost:3002/rescued_animal_insert/${formData.age}/${formData.breed}/${formData.weight}/${formData.rate}/${formData.type}/${formData.res_from}/${formData.is_adopt}/${formData.adopt_date}`;
    fetch(adminUrl);
  }; //:age/:breed/:weight/:rate/:type/:res_from/:is_adopt/:adopt_date

  return (
    <div className="flex justify-center pt-40 items-center h-screen">
      <div className="card w-96 bg-blue-50 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl text-blue-700 uppercase font-bold">
            Insert Rescued animal
          </h2>
          <form onSubmit={handleSubmit}>
            <div>
              <div>
                <label htmlFor="age">Age:</label>
                <input
                  type="text"
                  id="age"
                  name="age"
                  className="input input-bordered input-sm w-full max-w-xs"
                  value={formData.age}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="breed">Breed:</label>
                <input
                  type="text"
                  id="breed"
                  name="breed"
                  value={formData.breed}
                  className="input input-bordered input-sm  w-full max-w-xs"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="weight">Weight:</label>
                <input
                  type="text"
                  id="weight"
                  name="weight"
                  value={formData.weight}
                  className="input input-bordered input-sm w-full max-w-xs"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="rate">Rate:</label>
                <input
                  type="text"
                  id="rate"
                  name="rate"
                  value={formData.rate}
                  className="input input-bordered input-sm w-full max-w-xs"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="type">Type:</label>
                <input
                  type="text"
                  id="type"
                  name="type"
                  className="input input-bordered input-sm w-full max-w-xs"
                  value={formData.type}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="res_from">res_from</label>
                <input
                  type="text"
                  id="res_from"
                  name="res_from"
                  className="input input-bordered input-sm w-full max-w-xs"
                  value={formData.res_from}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="is_adopt">is_adopt</label>
              <input
                type="text"
                id="is_adopt"
                name="is_adopt"
                className="input input-bordered input-sm w-full max-w-xs"
                value={formData.is_adopt}
                onChange={handleInputChange}
              />
            </div>
            <div className="pb-5">
              <div>
                <label htmlFor="adopt_date">adopt_date</label>
                <input
                  type="text"
                  id="adopt_date"
                  name="adopt_date"
                  className="input input-bordered input-sm w-full max-w-xs"
                  value={formData.adopt_date}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <button
              className="btn btn-accent w-full max-w-xs btn-outline font-semibold text-blue-200 bg-blue-100"
              type="submit"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RescuedInsert;

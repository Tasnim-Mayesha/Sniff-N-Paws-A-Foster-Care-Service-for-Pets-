/* eslint-disable no-restricted-globals */
import React, { useState } from "react";

const DaycareInsert = () => {
  const [formData, setFormData] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.toString() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let adminUrl = `http://localhost:3002/daycare_animal_insert/${formData.age}/${formData.breed}/${formData.weight}/${formData.rate}/${formData.type}/${formData.coming_date}/${formData.release_date}/${formData.customer_id}`;
    fetch(adminUrl);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-blue-50 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl text-blue-700 uppercase font-bold">
            Insert daycare animal
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
                <label htmlFor="coming_date">Coming date:</label>
                <input
                  type="text"
                  id="coming_date"
                  name="coming_date"
                  className="input input-bordered input-sm w-full max-w-xs"
                  value={formData.coming_date}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="release_date">Release date:</label>
              <input
                type="text"
                id="release_date"
                name="release_date"
                className="input input-bordered input-sm w-full max-w-xs"
                value={formData.release_date}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="customer_id">Customer id:</label>
              <input
                type="number"
                id="customer_id"
                name="customer_id"
                className="input input-bordered input-sm w-full max-w-xs"
                value={formData.customer_id}
                onChange={handleInputChange}
              />
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

export default DaycareInsert;

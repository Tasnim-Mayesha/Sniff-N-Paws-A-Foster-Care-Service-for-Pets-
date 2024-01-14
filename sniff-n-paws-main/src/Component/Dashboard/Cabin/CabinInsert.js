/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CabinInsert = () => {
  const [formData, setFormData] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.toString() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let adminUrl = `http://localhost:3002/cabin_insert/${formData.cabin_size}/${formData.existing_quantity}/${formData.type}/${formData.animal_type}`;
    fetch(adminUrl);
    ///  "/cabin_insert/:cabin_size/:existing_quantity/:type/:animal_type",
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl text-blue-700 uppercase font-bold">
            Cabin Insert
          </h2>
          <form onSubmit={handleSubmit}>
            <div>
              <div>
                <label htmlFor="cabin_size">Cabin size:</label>
                <input
                  type="number"
                  id="cabin_size"
                  name="cabin_size"
                  className="input input-bordered input-sm w-full max-w-xs"
                  value={formData.cabin_size}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="existing_quantity">Existing quantity:</label>
                <input
                  type="number"
                  id="existing_quantity"
                  name="existing_quantity"
                  value={formData.existing_quantity}
                  className="input input-bordered input-sm  w-full max-w-xs"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="type">Type:</label>
                <input
                  type="text"
                  id="type"
                  name="type"
                  value={formData.type}
                  className="input input-bordered input-sm  w-full max-w-xs"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="animal_type">Animal type:</label>
                <input
                  type="text"
                  id="animal_type"
                  name="animal_type"
                  value={formData.animal_type}
                  className="input input-bordered input-sm w-full max-w-xs"
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

export default CabinInsert;

import React, { useState } from "react";

const RescuerInsert = () => {
  const [formData, setFormData] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.toString() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let adminUrl = `http://localhost:3002/rescuer_insert/${formData.name}/${formData.phone}`;
    fetch(adminUrl);
  }; ///rescuer_insert/:name/:phone
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-blue-50 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl text-blue-700 uppercase font-bold">
            insert rescuer information
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
                <label htmlFor="phone">Phone:</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  className="input input-bordered input-sm  w-full max-w-xs"
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

export default RescuerInsert;

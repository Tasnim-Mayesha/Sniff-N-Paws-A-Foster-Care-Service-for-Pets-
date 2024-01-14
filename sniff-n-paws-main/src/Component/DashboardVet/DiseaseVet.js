import React, { useState } from "react";

const DiseaseVet = () => {
  const [formData, setFormData] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.toString() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let adminUrl = `http://localhost:3002/disease_insert/${formData.record_id}/${formData.disease_name}`;
    fetch(adminUrl);
  }; //disease_insert/:record_id/:disease_name"
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-blue-50 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl text-blue-700 uppercase font-bold">
            insert disease record
          </h2>
          <form onSubmit={handleSubmit}>
            <div>
              <div>
                <label htmlFor="health_record_id">Health record id: </label>
                <input
                  type="text"
                  id="health_record_id"
                  name="health_record_id"
                  className="input input-bordered input-sm w-full max-w-xs"
                  value={formData.health_record_id}
                  onChange={handleInputChange}
                />
              </div>
              <div className="pb-5">
                <label htmlFor="disease_name">Disease name:</label>
                <input
                  type="text"
                  id="disease_name"
                  name="disease_name"
                  value={formData.disease_name}
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

export default DiseaseVet;

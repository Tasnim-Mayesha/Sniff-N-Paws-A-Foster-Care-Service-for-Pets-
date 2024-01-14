import React, { useState } from "react";

const VetUpdateHealthRecord = () => {
  const [formData, setFormData] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.toString() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let adminUrl = `http://localhost:3002/health_record_insert/${formData.rabies}/${formData.rab_date}/${formData.flu}/${formData.flu_date}/${formData.spay_neuter}/${formData.animal_identifier}`;
    fetch(adminUrl);
  }; //health_record_insert/:rabies/:rab_date/:flu/:flu_date/:spay_neuter/:animal_identifier",
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-blue-50 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl text-blue-700 uppercase font-bold">
            insert health record
          </h2>
          <form onSubmit={handleSubmit}>
            <div>
              <div>
                <label htmlFor="rabies">rabies:</label>
                <input
                  type="text"
                  id="rabies"
                  name="rabies"
                  className="input input-bordered input-sm w-full max-w-xs"
                  value={formData.rabies}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="rab_date">rab_date:</label>
                <input
                  type="text"
                  id="rab_date"
                  name="rab_date"
                  value={formData.rab_date}
                  className="input input-bordered input-sm  w-full max-w-xs"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="flu">flu:</label>
                <input
                  type="text"
                  id="flu"
                  name="flu"
                  value={formData.flu}
                  className="input input-bordered input-sm w-full max-w-xs"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="flu_date">flu_date:</label>
                <input
                  type="text"
                  id="flu_date"
                  name="flu_date"
                  className="input input-bordered input-sm w-full max-w-xs"
                  value={formData.flu_date}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="spay_neuter">spay_neuter:</label>
                <input
                  type="text"
                  id="spay_neuter"
                  name="spay_neuter"
                  className="input input-bordered input-sm w-full max-w-xs"
                  value={formData.spay_neuter}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="pb-5">
              <label htmlFor="animal_identifier">animal_identifier:</label>
              <input
                type="text"
                id="animal_identifier"
                name="animal_identifier"
                className="input input-bordered input-sm w-full max-w-xs"
                value={formData.animal_identifier}
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

export default VetUpdateHealthRecord;

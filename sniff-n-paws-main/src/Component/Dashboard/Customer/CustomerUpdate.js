/* eslint-disable no-restricted-globals */
import React, { useState } from "react";

const CustomerUpdate = () => {
  const [formData, setFormData] = useState({ admin_id: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.toString() });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    let adminUrl = `http://localhost:3002/customer_update/${formData.attributeName}/${formData.attributeValue}/customer_id/${formData.name}`;
    fetch(adminUrl);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl text-blue-700 uppercase font-bold">
            Update customer
          </h2>
          <form onSubmit={handleUpdate}>
            <div>
              <label htmlFor="name">Admin ID:</label>
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
              <label htmlFor="attributeName">Attribute Name:</label>
              <input
                type="text"
                id="attributeName"
                name="attributeName"
                className="input input-bordered input-sm w-full max-w-xs"
                value={formData.attributeName}
                onChange={handleInputChange}
              />
            </div>
            <div className="pb-7">
              <label htmlFor="attributeValue">Attribute Value:</label>
              <input
                type="text"
                id="attributeValue"
                name="attributeValue"
                className="input input-sm input-bordered w-full max-w-xs"
                value={formData.attributeValue}
                onChange={handleInputChange}
              />
            </div>
            <button
              className="btn btn-accent w-full max-w-xs btn-outline font-semibold text-blue-200"
              type="submit"
            >
              UPDATE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomerUpdate;

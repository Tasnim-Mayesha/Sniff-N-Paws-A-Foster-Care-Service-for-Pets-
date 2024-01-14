import React, { useState } from "react";

const DonationAdd = () => {
  const current = new Date();
  const date = `${current.getDate()}-${
    current.getMonth() + 1
  }-${current.getFullYear()}`;
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    cid: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.toString() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.cid.length === 0) formData.cid = "null";
    let adminUrl = `http://localhost:3002/donation_insert/${formData.name}/${formData.amount}/${date}/${formData.cid}`;
    fetch(adminUrl);
    ///DONATION_NAME, D_AMOUNT, DONATION_DATE, CUSTOMER_ID
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-blue-50 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl text-blue-700 uppercase font-bold">
            Donate for pets
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
                <label htmlFor="amount">Amount:</label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  className="input input-bordered input-sm  w-full max-w-xs"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="date">Date:</label>
                <input
                  type="text"
                  id="date"
                  name="date"
                  value={date}
                  className="input input-bordered input-sm  w-full max-w-xs"
                  disabled
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="cid">Customer ID:</label>
                <input
                  type="text"
                  id="cid"
                  name="cid"
                  value={formData.cid}
                  className="input input-bordered input-sm w-full max-w-xs"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="pt-4">
              <button
                className="btn btn-accent w-full max-w-xs btn-outline bg-blue-100 font-semibold text-blue-200"
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

export default DonationAdd;

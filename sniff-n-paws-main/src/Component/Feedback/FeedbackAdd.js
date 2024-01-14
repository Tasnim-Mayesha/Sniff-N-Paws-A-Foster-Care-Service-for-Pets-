import React, { useState } from "react";
import { toast } from "react-toastify";

const FeedbackAdd = () => {
  const current = new Date();
  const date = `${current.getDate()}-${
    current.getMonth() + 1
  }-${current.getFullYear()}`;
  const [formData, setFormData] = useState({
    subject: "",
    rating: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.toString() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3002/login_status")
      .then((res) => res.json())
      .then((data) => {
        const status = data[0][0];
        if (status === 0) {
          toast.error("Please login first");
        } else {
          fetch("http://localhost:3002/login_cust_id")
            .then((res) => res.json())
            .then((data) => {
              const id = data[0][0];
              let adminUrl = `http://localhost:3002/feedback_insert/${formData.subject}/${date}/${formData.rating}/${formData.message}/${id}`;
              fetch(adminUrl);
              toast.success("Feedback added successfully");
            });
        }
      });

    ///feedback_insert/:subject/:date/:rating/:message/:customerId
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-blue-50 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl text-blue-700 uppercase font-bold">
            Give your feedback
          </h2>
          <form onSubmit={handleSubmit}>
            <div>
              <div>
                <label htmlFor="subject">Subject:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="input input-bordered input-sm w-full max-w-xs"
                  value={formData.subject}
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
                <label htmlFor="rating">Rating:</label>
                <input
                  type="text"
                  id="rating"
                  name="rating"
                  value={formData.rating}
                  className="input input-bordered input-sm w-full max-w-xs"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <input
                  type="text"
                  id="message"
                  name="message"
                  value={formData.message}
                  className="input input-bordered input-lg w-full max-w-xs"
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

export default FeedbackAdd;

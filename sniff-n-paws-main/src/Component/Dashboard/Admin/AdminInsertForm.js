/* eslint-disable no-restricted-globals */
import React, { useState } from "react";

const AdminInsertForm = () => {
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
    designation: "",
  });
  //const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.toString() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let adminUrl = `http://localhost:3002/admin_insert/${formData.name}/${formData.email}/${formData.gender}/${formData.city}/${formData.street}/${formData.house}/${formData.dob}/${formData.salary}/${formData.designation}/${formData.phone}`;
    fetch(adminUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("ERORRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        }
        res.json();
      })
      .then((data) => {
        if (data.error) {
          console.error(data.error); // Show the error message
        } else {
          console.log(data.message); // Show success message
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl text-blue-700 uppercase font-bold">
            Add Admin
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
                <label htmlFor="salary">Salary:</label>
                <input
                  type="number"
                  id="salary"
                  name="salary"
                  className="input input-bordered input-sm w-full max-w-xs"
                  value={formData.salary}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="pb-7">
              <label htmlFor="designation">Designation:</label>
              <input
                type="text"
                id="designation"
                name="designation"
                value={formData.designation}
                className="input input-bordered input-sm w-full max-w-xs"
                onChange={handleInputChange}
              />
            </div>

            <button
              className="btn btn-accent w-full max-w-xs btn-outline font-semibold text-blue-200"
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

export default AdminInsertForm;

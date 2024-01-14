import React from "react";
import { Link } from "react-router-dom";
import bg from "../../assets/images/output-onlinepngtools.png";

const LoginViewPg = () => {
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
      }}
      className="flex justify-center items-center h-screen"
    >
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl text-blue-700 uppercase font-bold">
            Login as
          </h2>
          <Link to="/loginAdmin">
            <input
              className="btn btn-outline w-full font-bold bg-blue-100 text-sm text-blue-800"
              type="submit"
              value="ADMIN"
            />
          </Link>
          <Link to="/loginStaff">
            <input
              className="btn btn-outline w-full font-bold bg-blue-100 text-sm text-blue-800"
              type="submit"
              value="STAFF"
            />
          </Link>
          <Link to="/loginCustomer">
            <input
              className="btn btn-outline w-full font-bold bg-blue-100 text-sm text-blue-800"
              type="submit"
              value="CUSTOMER"
            />
          </Link>
          <Link to="/loginVet">
            <input
              className="btn btn-outline w-full font-bold bg-blue-100 text-sm text-blue-800"
              type="submit"
              value="VET"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginViewPg;

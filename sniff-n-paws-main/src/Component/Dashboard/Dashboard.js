import React from "react";
import { Link, Outlet } from "react-router-dom";
import bg from "../../assets/images/output7.png";

const Dashboard = () => {
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
      }}
      className="drawer lg:drawer-open"
    >
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <h1 className="w-full h-full font-extrabold text-left text-5xl text-blue-700 pl-4 pt-7">
          Dashboard
        </h1>
        <Outlet />
        <label
          for="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-blue-50 text-base-content">
          <li>
            <Link
              to="/dashboard"
              className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full pt-20 uppercase h-full font-bold text-center text-sm text-blue-700"
            >
              👉 Admin
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/customers"
              className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold text-center text-sm text-blue-700"
            >
              👉 customers
            </Link>
          </li>

          <li>
            <Link
              to="/dashboard/staff"
              className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold text-center text-sm text-blue-700"
            >
              👉 staff
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/vet"
              className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold text-center text-sm text-blue-700"
            >
              👉 veterinarian
            </Link>
          </li>

          {/* <li>
            <Link
              to="/dashboard/healthRecord"
              className="w-full uppercase h-full font-bold text-center text-sm text-blue-700"
            >
              👉 health record
            </Link>
          </li> */}

          <li>
            <Link
              to="/dashboard/donation"
              className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold text-center text-sm text-blue-700"
            >
              👉 donation
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/feedback"
              className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold text-center text-sm text-blue-700"
            >
              👉 feedback
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/rescuer"
              className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold text-center text-sm text-blue-700"
            >
              👉 rescuer
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/cabin"
              className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold text-center text-sm text-blue-700"
            >
              👉 cabin
            </Link>
          </li>
          <li>
            <Link
              className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold text-center text-sm text-blue-700"
              to="/dashboard/daycareAnimal"
            >
              👉 daycare Animal
            </Link>
          </li>
          <li>
            <Link
              className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold text-center text-sm text-blue-700"
              to="/dashboard/rescuedAnimal"
            >
              👉 rescued Animal
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

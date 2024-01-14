import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardVet = () => {
  return (
    <div className="flex">
      <div className="drawer lg:drawer-open">
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
                to="/dashboardVet"
                className="w-full pt-20 uppercase h-full font-bold text-center text-sm text-blue-700"
              >
                👉 profile
              </Link>
            </li>
            <li>
              <Link
                to="/dashboardVet/vetProfile"
                className="w-full uppercase h-full font-bold text-center text-sm text-blue-700"
              >
                👉 pending animals
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardVet;

import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardStuff = () => {
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
                to="/dashboardStaff"
                className="w-full  pt-20  uppercase h-full font-bold text-center text-sm text-blue-700"
              >
                👉 profile
              </Link>
            </li>
            <li>
              <Link
                to="/dashboardStaff/staffFindCabin"
                className="w-full uppercase h-full font-bold text-center text-sm text-blue-700"
              >
                👉 staff find cabin
              </Link>
            </li>{" "}
            <li>
              <Link
                to="/dashboardStaff/staffDaycareAnimal"
                className="w-full uppercase h-full font-bold text-center text-sm text-blue-700"
              >
                👉 staff daycare animal
              </Link>
            </li>
            <li>
              <Link
                to="/dashboardStaff/staffRescuedAnimal"
                className="w-full uppercase h-full font-bold text-center text-sm text-blue-700"
              >
                👉 staff rescued animal
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardStuff;

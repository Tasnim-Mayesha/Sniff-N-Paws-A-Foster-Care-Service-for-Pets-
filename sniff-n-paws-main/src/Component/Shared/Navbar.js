import React, { useEffect, useState } from "react";
import img from "../../assets/images/pets-g1111451cc_1280.jpg";
import img2 from "../../assets/images/favicon.ico";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import useLoginUsers from "../../hooks/useLoginUsers";
import bg from "../../assets/images/images_3.jpg";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3002/login_status")
      .then((response) => response.json())
      .then((data) => {
        const statusFromBackend = data.isStatusTrue;
        // console.log(data.isStatusTrue);
        setStatus(statusFromBackend);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const [handleLogin] = useLoginUsers();
  if (handleLogin.success === true) {
  }

  const menuItems = (
    <>
      <li>
        <Link
          className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full pt-4 h-full font-black uppercase text-center text-sm text-blue-700"
          to={"/"}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full pt-4 h-full font-black uppercase text-center text-sm text-blue-700"
          to={"/services"}
        >
          services
        </Link>
      </li>
      <li>
        <Link
          className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full pt-4  h-full font-black uppercase text-center text-sm text-blue-700"
          to={"/feedbackGeneral"}
        >
          feedback
        </Link>
      </li>
      {/* <li>
        <Link
          className="w-full  pt-4 h-full font-black uppercase text-center text-sm text-blue-700"
          to={"/donate"}
        >
          Donate
        </Link>
      </li> */}
      <li>
        <Link
          className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full pt-4  h-full font-black uppercase text-center text-sm text-blue-700"
          to={"/contact"}
        >
          contact
        </Link>
      </li>
      <li>
        <Link
          className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full pt-4  h-full font-black uppercase text-center text-sm text-blue-700"
          to={"/about"}
        >
          About
        </Link>
      </li>
      <div>
        <div class="dropdown dropdown-bottom">
          <label tabindex="0" className="btn btn-ghost bg-blue-50">
            <small className="uppercase text-sm font-black text-blue-700">
              Dashboard
            </small>
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-blue-50 rounded-box w-52"
          >
            <li>
              <Link
                to="/Dashboard"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold text-center text-sm text-blue-700"
              >
                👉 Admin
              </Link>
            </li>
            <li>
              <Link
                to="/dashboardStaff"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold text-center text-sm text-blue-700"
              >
                👉 staff
              </Link>
            </li>
            <li>
              <Link
                to="/dashboardCustomer"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold text-center text-sm text-blue-700"
              >
                👉 Customer
              </Link>
            </li>

            <li>
              <Link
                to="/dashboardVet"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold text-center text-sm text-blue-700"
              >
                👉 Vet
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <li>
        <Link
          className="w-full transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none  pt-4 h-full font-black uppercase text-center text-sm text-blue-700"
          to={"/loginView"}
        >
          login
        </Link>
      </li>
      {status ? (
        <li>
          <Link
            className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full pt-4  h-full font-black uppercase text-center text-sm text-blue-700"
            to={"/loginView"}
          >
            login
          </Link>
        </li>
      ) : (
        <li>
          <Link
            className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full  pt-4 h-full font-black uppercase text-center text-sm text-blue-700"
            to={"/logout"}
          >
            logout
          </Link>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div
        style={{
          background: `url(${bg})`,
          backgroundSize: "cover",
        }}
        className="navbar bg-blue-50"
      >
        <div className="navbar-start">
          <div className="dropdown">
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-50 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <img height={20} width={60} src={img2} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

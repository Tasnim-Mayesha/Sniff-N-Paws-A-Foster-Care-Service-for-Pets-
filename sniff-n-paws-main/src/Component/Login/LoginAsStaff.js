import React, { useState } from "react";
import axios from "axios";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import { toast } from "react-toastify";
import bg from "../../assets/images/output7.png";

const LoginAsStaff = () => {
  const [user, setUser] = useState(null);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  let from =
    location.state && location.state.from && location.state.from.pathname
      ? location.state.from.pathname
      : "/";

  console.log(from);
  // if (error || gerror) {
  //   toast.error("Error during login", error, gerror);
  // }

  if (gloading || loading) {
    return <Loading></Loading>;
  }

  const handleLogin = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `http://localhost:3002/staff_password/${email}/${password}`
      );

      const success = response.data.length > 0;

      if (success) {
        axios
          .get(`http://localhost:3002/login_insert/${email}/staff/1`)
          .then((res) => {
            if (res.data.errorNum === 20003) {
              setLoading(false);
              setError("Already logged in");
              toast.error("Already logged in");
              setEmail("");
              setPassword("");
            } else {
              setUser(response.data[0][2]);
              setLoading(false);
              setError(null);
              toast.success("Successfully logged in");
              setStatus(1);
              navigate(from, { replace: true });
            }
          });
      } else {
        setLoading(false);
        setError("Invalid email or password");
        toast.error("Invalid email or password");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      setLoading(false);
      setError("Error during login");
      toast.error("Error during login", error);
      console.error("Error during login:", error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  const handleLogout = () => {
    setUser(null);
    setEmail("");
    setPassword("");
    setStatus(0);
  };

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
          <h1 className="text-center text-xl text-blue-700 font-extrabold">
            {user ? `Welcome, ${user}!` : "Please login as STAFF"}
          </h1>

          <form onSubmit={handleFormSubmit}>
            <div className="form-control pt-5 w-full max-w-xs">
              <label className="label">
                <span className="label-text text-blue-700 font-bold text-xs">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full max-w-xs"
                required
              />
            </div>
            {/* password field */}
            <div className="form-control w-full max-w-xs pb-7">
              <label className="label">
                <span className="label-text text-blue-700 font-bold text-xs">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full max-w-xs"
                required
              />
            </div>
            <button
              className="btn btn-outline w-full font-bold bg-blue-100 text-xs text-blue-800"
              type="submit"
            >
              Login
            </button>
            {loading && <div>Loading...</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginAsStaff;
// {user ? (
//             <Logout />
//           ) :()}

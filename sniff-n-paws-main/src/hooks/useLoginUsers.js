import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useLoginUsers = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  let from =
    location.state && location.state.from && location.state.from.pathname
      ? location.state.from.pathname
      : "/";

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:3002/customer_password/${email}/${password}`
      );

      const success = response.data.length > 0;

      if (success > 0) {
        console.log("Login successful:", response.data[0][2]);

        navigate(from, { replace: true });
      } else {
        console.error("Login failed:", email);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return [handleLogin];
};

export default useLoginUsers;

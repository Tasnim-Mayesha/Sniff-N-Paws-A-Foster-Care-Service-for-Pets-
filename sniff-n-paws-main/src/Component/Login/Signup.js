import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/footprints-g19010b4f3_1280.png";
import CustomerInsert from "../Dashboard/Customer/CustomerInsert";

const Signup = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  return <CustomerInsert></CustomerInsert>;
};

export default Signup;

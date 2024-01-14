import React from "react";

const Button = ({ children }) => {
  return (
    <button className="max-w-xs transition duration-300 ease-in-out hover:scale-110">
      {children}
    </button>
  );
};

export default Button;

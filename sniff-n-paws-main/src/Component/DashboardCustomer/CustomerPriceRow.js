import React, { useState } from "react";

const CustomerPriceRow = ({ feedback }) => {
  const [msg, setMsg] = useState("");
  if (feedback.length === 0) {
    setMsg("Sorry, No feedback history");
  }
  console.log(msg);
  return (
    <div>
      {feedback.length === 0 ? (
        <div class="card w-full bg-blue-50">
          <div class="hero-content card-body items-center text-center flex-col lg:flex-row">
            <div>
              <h2 className="card-title text-base font-extrabold text-blue-700">
                {msg}
              </h2>
            </div>
          </div>
        </div>
      ) : (
        <div class="card w-full bg-blue-50">
          <div class="relative text-center">
            <div>
              <h2 className="card-title text-base font-extrabold text-blue-700">
                {feedback[0]}
              </h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerPriceRow;

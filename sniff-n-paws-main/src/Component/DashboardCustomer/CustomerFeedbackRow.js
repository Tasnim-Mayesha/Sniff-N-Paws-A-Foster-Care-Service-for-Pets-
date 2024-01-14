import React, { useState } from "react";

const CustomerFeedbackRow = ({ feedback }) => {
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
        <div class="relative mt-20 w-full bg-blue-50">
          <div class="card-body text-center">
            <div>
              <h2 className="card-title text-base font-extrabold text-blue-700">
                Feedback Subject : {feedback[0]}
              </h2>
              <p className="text-justify">
                <b>Feedback Time :</b> {feedback[1]}
              </p>
              <p className="text-justify">
                <b>RATING :</b>
                {feedback[2]}
              </p>
              <p className="text-justify">
                <b>Feedback Body :</b>
                {feedback[3]}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerFeedbackRow;

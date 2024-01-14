import React, { useEffect, useState } from "react";
import FeedbackRows from "./FeedbackRows";

const FeedbackPrev = () => {
  const [feedbacks, setfeedbacks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/feedback")
      .then((res) => res.json())
      .then((datam) => {
        setfeedbacks(datam);
      });
  }, []);
  return (
    <div className="pt-20 pb-56 pl-0">
      <div className="overflow-x-auto px-32">
        <h1 className="font-semibold text-2xl pb-7 text-blue-700">
          Total Feedbacks: {feedbacks.length}
        </h1>
        <div>
          <table className="table">
            <thead>
              <tr>
                <td className="uppercase text-xs font-extrabold text-left">
                  name
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  email
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  subject
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  time
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  rating
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  message
                </td>
              </tr>
            </thead>
            <tbody>
              {feedbacks.map((feedback) => (
                <FeedbackRows
                  key={feedback.feedback_id}
                  feedback={feedback}
                ></FeedbackRows>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPrev;

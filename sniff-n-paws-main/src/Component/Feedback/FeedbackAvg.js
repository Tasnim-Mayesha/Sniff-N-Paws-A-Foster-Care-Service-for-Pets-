import React, { useEffect, useState } from "react";
import FeedbackRows from "./FeedbackRows";
import FeedbackAvgRow from "./FeedbackAvgRow";

const FeedbackAvg = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/avg_rate")
      .then((res) => res.json())
      .then((datam) => {
        setFeedbacks(datam);
      });
  }, []);
  return (
    <div>
      <div className="pt-20 pb-56 pl-0">
        <div className="overflow-x-auto">
          <h1 className="font-semibold text-center text-2xl pb-7 text-blue-700">
            average rating
          </h1>
          <table className="table">
            <thead>
              <tr>
                <th className="uppercase text-xs font-extrabold text-center">
                  Subject
                </th>
                <td className="uppercase text-xs font-extrabold text-center">
                  average rating
                </td>
              </tr>
            </thead>
            <tbody>
              {feedbacks.map((feedback) => (
                <FeedbackAvgRow feedback={feedback}></FeedbackAvgRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FeedbackAvg;

import React, { useEffect, useState } from "react";
import FeedbackNegativeRow from "./FeedbackNegativeRow";

const FeedbackNegative = () => {
  const [negatives, setNegatives] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/negative_feedback")
      .then((res) => res.json())
      .then((datam) => {
        setNegatives(datam);
      });
  }, []);
  return (
    <div>
      <div className="my-12">
        <h2 className="text-blue-800 text-center uppercase font-black text-2xl">
          Our negative reviews
        </h2>
        <div className="grid grid-cols-3 px-20 pt-20 gap-10">
          {negatives.map((negative) => (
            <FeedbackNegativeRow negative={negative}></FeedbackNegativeRow>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackNegative;

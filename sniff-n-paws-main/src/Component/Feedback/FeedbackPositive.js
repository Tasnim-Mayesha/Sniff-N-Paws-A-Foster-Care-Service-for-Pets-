import React, { useEffect, useState } from "react";
import FeedbackPositiveRow from "./FeedbackPositiveRow";

const FeedbackPositive = () => {
  const [positives, setPositives] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/positive_feedback")
      .then((res) => res.json())
      .then((datam) => {
        setPositives(datam);
      });
  }, []);
  return (
    <div>
      <div className="my-12">
        <h1 className="text-blue-800 text-center uppercase font-black text-2xl">
          Our positive feedbacks
        </h1>
        <div className="grid grid-cols-3 px-20 pt-20 gap-10">
          {positives.map((positive) => (
            <FeedbackPositiveRow positive={positive}></FeedbackPositiveRow>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackPositive;

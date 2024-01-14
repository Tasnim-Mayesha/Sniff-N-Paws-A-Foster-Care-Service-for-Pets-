import React, { useEffect, useState } from "react";
import FeedbackReviewRow from "./FeedbackReviewRow";

const FeedbackForVet = () => {
  const [feedbacks, setfeedbacks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/feedback_veterinarian_review")
      .then((res) => res.json())
      .then((datam) => {
        setfeedbacks(datam);
      });
  }, []);
  return (
    <div>
      <div className="my-12">
        <h2 className="text-blue-800 text-center uppercase font-black text-2xl">
          Our Vet reviews
        </h2>
        <div className="grid grid-cols-3 px-20 pt-20 gap-10">
          {feedbacks.map((feedback) => (
            <FeedbackReviewRow feedback={feedback}></FeedbackReviewRow>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackForVet;

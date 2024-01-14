import React, { useEffect, useState } from "react";
import FeedbackCardsss from "./FeedbackCardsss";

const FeedbackAll = () => {
  const [feedbacks, setfeedbacks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/feedback")
      .then((res) => res.json())
      .then((datam) => {
        setfeedbacks(datam);
      });
  }, []);
  return (
    <div>
      <div className="text-center pt-24">
        <h3 className="text-blue-800 uppercase font-black text-2xl">
          OUR feedbacks
        </h3>
      </div>
      <div className="my-12">
        <div className="grid grid-cols-3 px-20 pt-20 gap-10">
          {feedbacks.map((feedback) => (
            <FeedbackCardsss
              key={feedback.feedback_id}
              feedback={feedback}
            ></FeedbackCardsss>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackAll;

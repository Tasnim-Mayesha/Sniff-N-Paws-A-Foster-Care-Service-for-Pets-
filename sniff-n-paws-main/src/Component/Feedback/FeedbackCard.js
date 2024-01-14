import React, { useEffect, useState } from "react";
import FeedbackCardsss from "./FeedbackCardsss";
import { Link } from "react-router-dom";
import FeedbackAll from "./FeedbackAll";

const FeedbackCard = () => {
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
      <div className="my-12">
        <div className="grid grid-cols-1 px-20 pt-20 gap-10">
          {feedbacks.slice(0, 3).map((feedback) => (
            <FeedbackCardsss
              key={feedback.feedback_id}
              feedback={feedback}
            ></FeedbackCardsss>
          ))}
        </div>
        <Link to="/feedbackAll" element={<FeedbackAll />}>
          <p className="text-primary text-center">See More...</p>
        </Link>
      </div>
    </div>
  );
};

export default FeedbackCard;

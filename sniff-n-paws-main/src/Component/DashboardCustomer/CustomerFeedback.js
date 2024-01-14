import React, { useEffect, useState } from "react";
import CustomerFeedbackRow from "./CustomerFeedbackRow";

const CustomerFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/c_feedback")
      .then((res) => res.json())
      .then((datam) => {
        setFeedbacks(datam);
      });
  }, []);
  return (
    <div>
      <div className="my-12">
        {feedbacks.map((feedback) => (
          <CustomerFeedbackRow feedback={feedback}></CustomerFeedbackRow>
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedback;

import React from "react";

const FeedbackReviewRow = ({ feedback }) => {
  return (
    <div>
      <div class="card w-96 bg-blue-50">
        <div class="hero-content card-body items-center text-center flex-col lg:flex-row">
          <div>
            <p className="text-justify text-xs font-bold">
              <small className="text-justify text-sm font-extrabold text-blue-700">
                Review:
              </small>
              {feedback[0]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackReviewRow;

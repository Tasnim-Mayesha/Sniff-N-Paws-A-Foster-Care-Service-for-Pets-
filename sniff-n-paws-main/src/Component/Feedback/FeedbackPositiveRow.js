import React from "react";

const FeedbackPositiveRow = ({ positive }) => {
  return (
    <div>
      <div class="card w-96 bg-blue-50">
        <div class="hero-content card-body items-center text-center flex-col lg:flex-row">
          <div>
            <h2 className="card-title text-base font-extrabold text-blue-700">
              {positive[0]}
            </h2>
            <p className="text-justify text-xs font-extrabold text-blue-700">
              RATING: {positive[1]}
            </p>
            <p className="text-justify">{positive[2]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPositiveRow;

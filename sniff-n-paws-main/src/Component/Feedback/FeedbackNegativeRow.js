import React from "react";

const FeedbackNegativeRow = ({ negative }) => {
  return (
    <div>
      <div class="card w-96 bg-blue-50">
        <div class="hero-content card-body items-center text-center flex-col lg:flex-row">
          <div>
            <h2 className="card-title text-lg font-extrabold text-blue-700">
              {negative[0]}
            </h2>
            <p className="text-justify text-xs font-extrabold text-blue-700">
              RATING: {negative[1]}
            </p>
            <p className="text-justify">{negative[2]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackNegativeRow;

import React from "react";

const FeedbackCardsss = ({ feedback }) => {
  // const { name, message, rating } = feedback;
  return (
    <div>
      <div class="card w-96 bg-blue-50">
        <div class="hero-content card-body items-center text-center flex-col lg:flex-row">
          <div>
            <h2 className="card-title text-base font-extrabold text-blue-700">
              {feedback[0]}
            </h2>
            <p className="text-justify">{feedback[5]}</p>
            <p className="text-justify">{feedback[4]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCardsss;

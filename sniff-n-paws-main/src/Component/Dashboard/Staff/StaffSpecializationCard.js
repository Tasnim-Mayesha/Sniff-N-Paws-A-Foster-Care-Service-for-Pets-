import React from "react";

const StaffSpecializationCard = ({ specialization }) => {
  return (
    <div>
      <div class="card w-full bg-blue-50">
        <div class="hero-content card-body items-center text-center flex-col lg:flex-row">
          <div>
            <h2 className="card-title text-base font-extrabold text-blue-700">
              {specialization[0]}
            </h2>
            <p className="text-justify">{specialization[1]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffSpecializationCard;

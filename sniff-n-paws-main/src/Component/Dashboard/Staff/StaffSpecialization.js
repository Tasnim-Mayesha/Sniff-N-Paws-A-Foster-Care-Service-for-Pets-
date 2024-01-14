import React, { useEffect, useState } from "react";
import StaffSpecializationCard from "./StaffSpecializationCard";

const StaffSpecialization = () => {
  const [specializations, setSpecializations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/staff_specialization")
      .then((res) => res.json())
      .then((datam) => {
        setSpecializations(datam);
      });
  }, []);
  return (
    <div>
      <div className="my-12">
        <div className="grid grid-cols-1 px-20 pt-20 gap-10">
          {specializations.map((specialization) => (
            <StaffSpecializationCard
              key={specialization.feedback_id}
              specialization={specialization}
            ></StaffSpecializationCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaffSpecialization;

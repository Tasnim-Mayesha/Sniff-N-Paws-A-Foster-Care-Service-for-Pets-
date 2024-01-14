import React, { useEffect, useState } from "react";
import StaffDaycareAnimalRow from "./StaffDaycareAnimalRow";

const StaffRescuedAnimal = () => {
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/staff_rescued_animal")
      .then((res) => res.json())
      .then((datam) => {
        setAnimals(datam);
      });
  }, []);
  return (
    <div>
      <div className="pt-12 pb-40">
        <div className="overflow-x-auto">
          <h1 className="font-semibold text-2xl text-blue-700">
            Total Daycare Animals: {animals.length}
          </h1>
          <table className="table">
            <thead>
              <tr>
                <th>index</th>
                <td>AGE</td>
                <td>BREED</td>
                <td>WEIGHT</td>
                <td>RATE</td>
                <td>TYPE</td>
                <td>COMING_DATE</td>
                <td>RELEASE_DATE</td>
                <td>cabin_no</td>
                <td>health record id</td>
                <td>customer_id</td>
              </tr>
            </thead>
            <tbody>
              {animals.map((animal) => (
                <StaffDaycareAnimalRow animal={animal}></StaffDaycareAnimalRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StaffRescuedAnimal;

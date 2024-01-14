import React, { useEffect, useState } from "react";
import DaycareAnimalRow from "./DaycareAnimalRow";

const HealthyDaycare = () => {
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/healthy_day_care_animal")
      .then((res) => res.json())
      .then((datam) => {
        setAnimals(datam);
      });
  }, []);
  return (
    <div>
      <div className="pt-40 pb-40">
        <div className="overflow-x-auto">
          <h1 className="font-semibold text-2xl text-blue-700">
            Total Healthy Daycare Animals: {animals.length}
          </h1>
          <table className="table">
            <thead>
              <tr>
                <th>DAYCARE_ANIMAL_ID </th>
                <td>BREED</td>
                <td>TYPE</td>
                <td>coming date</td>
                <td>release date</td>
                <td>CABIN_NO</td>
                <td>CUSTOMER_ID</td>
              </tr>
            </thead>
            <tbody>
              {animals.map((animal) => (
                <DaycareAnimalRow
                  key={animal.index}
                  animal={animal}
                ></DaycareAnimalRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HealthyDaycare;

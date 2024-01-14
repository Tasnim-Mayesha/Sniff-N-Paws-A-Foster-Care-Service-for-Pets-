import React, { useEffect, useState } from "react";
import DaycareAnimalRow from "./DaycareAnimalRow";

const IsolatedRescued = () => {
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/isolated_rescued_animal")
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
            Total Isolated Rescued Animals: {animals.length}
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
                <td>customer_id</td>
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

export default IsolatedRescued;

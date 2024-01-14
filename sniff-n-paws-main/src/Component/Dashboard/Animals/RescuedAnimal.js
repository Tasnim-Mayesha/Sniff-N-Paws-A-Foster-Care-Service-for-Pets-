import React, { useEffect, useState } from "react";
import RescuedAnimalRow from "./RescuedAnimalRow";
import HealthyRescued from "./HealthyRescued";
import IsolatedRescued from "./IsolatedRescued";
import UnvaccinatedRescued from "./UnvaccinatedRescued";
import RescuedInsert from "./RescuedInsert";

const RescuedAnimal = () => {
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/rescued_animal")
      .then((res) => res.json())
      .then((datam) => {
        setAnimals(datam);
      });
  }, []);
  return (
    <div>
      <div className="pt-40 pb-56">
        <div className="overflow-x-auto">
          <h1 className="font-semibold text-2xl text-blue-700">
            Total Rescued Animals: {animals.length}
          </h1>
          <table className="table">
            <thead>
              <tr>
                <th>INDEX</th>
                <td>AGE</td>
                <td>BREED</td>
                <td>WEIGHT</td>
                <td>RATE</td>
                <td>TYPE</td>
                <td>RESCUED_FROM</td>
                <td>IS_ADOPTED</td>
                <td>ADOPTION_DATE</td>
              </tr>
            </thead>
            <tbody>
              {animals.map((animal) => (
                <RescuedAnimalRow
                  key={animal.index}
                  animal={animal}
                ></RescuedAnimalRow>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <RescuedInsert></RescuedInsert>
          <UnvaccinatedRescued></UnvaccinatedRescued>
          <IsolatedRescued></IsolatedRescued>
          <HealthyRescued></HealthyRescued>
        </div>
      </div>
    </div>
  );
};

export default RescuedAnimal;

import React, { useEffect, useState } from "react";
import DaycareAnimalRow from "./DaycareAnimalRow";
import DaycareAnimalRecordViewRow from "./DaycareAnimalRecordViewRow";

const DaycareAnimalRecordView = () => {
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/daycare_animal_record_view")
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
            Total Daycare Animal Record: {animals.length}
          </h1>
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <td>AGE</td>
                <td>BREED</td>
                <td>WEIGHT</td>
                <td>TYPE</td>
                <td>RABIES</td>
                <td>RABIES_DATE</td>
                <td>FLU</td>
                <td>FLU_DATE</td>
                <td>SPAY_NEUTER</td>
                <td>Diseases</td>
              </tr>
            </thead>
            <tbody>
              {animals.map((animal) => (
                <DaycareAnimalRecordViewRow
                  animal={animal}
                ></DaycareAnimalRecordViewRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DaycareAnimalRecordView;

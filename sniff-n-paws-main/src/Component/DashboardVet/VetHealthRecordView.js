import React, { useEffect, useState } from "react";
import VetHealthRecordViewRow from "./VetHealthRecordViewRow";

const VetHealthRecordView = () => {
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/pending_animal")
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
            Total Pending Animals: {animals.length}
          </h1>
          <table className="table">
            <thead>
              <tr>
                <th>animal identifier</th>
                <td>request date</td>
              </tr>
            </thead>
            <tbody>
              {animals.map((animal) => (
                <VetHealthRecordViewRow
                  animal={animal}
                ></VetHealthRecordViewRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VetHealthRecordView;

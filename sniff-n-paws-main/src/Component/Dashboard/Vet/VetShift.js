import React, { useEffect, useState } from "react";
import VetShiftRow from "./VetShiftRow";
import VetShiftScheduleView from "./VetShiftScheduleView";

const VetShift = () => {
  const [vets, setVets] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/doctor_shift")
      .then((res) => res.json())
      .then((datam) => {
        setVets(datam);
      });
  }, []);
  return (
    <div>
      <div className="pt-20 pb-56 pl-0">
        <div className="overflow-x-auto">
          <h1 className="font-semibold text-2xl pb-7 text-blue-700">
            Total Veterinarian schedule: {vets.length}
          </h1>
          <table className="table">
            <thead>
              <tr>
                <th className="uppercase text-xs font-extrabold text-center">
                  Vet_id
                </th>
                <td className="uppercase text-xs font-extrabold text-center">
                  vet_name
                </td>
                <td className="uppercase text-xs font-extrabold text-center">
                  vet_schedule
                </td>
              </tr>
            </thead>
            <tbody>
              {vets.map((vet) => (
                <VetShiftScheduleView
                  key={vet.vet_id}
                  vet={vet}
                ></VetShiftScheduleView>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VetShift;

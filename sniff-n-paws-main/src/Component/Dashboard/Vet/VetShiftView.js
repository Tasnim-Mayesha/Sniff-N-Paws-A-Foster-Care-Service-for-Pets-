import React, { useEffect, useState } from "react";
import VetShiftRow from "./VetShiftRow";

const VetShiftView = () => {
  const [vets, setVets] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/veterinarian_shift_view")
      .then((res) => res.json())
      .then((datam) => {
        setVets(datam);
      });
  }, []);
  return (
    <div>
      <div className="pt-20 pb-24 pl-0">
        <div className="overflow-x-auto">
          <h1 className="font-semibold text-2xl pb-7 text-blue-700">
            Total Veterinarian shift: {vets.length}
          </h1>
          <table className="table">
            <thead>
              <tr>
                <th className="uppercase text-xs font-extrabold text-center">
                  shift_name
                </th>
                <td className="uppercase text-xs font-extrabold text-center">
                  start_time
                </td>
                <td className="uppercase text-xs font-extrabold text-center">
                  end_time
                </td>
              </tr>
            </thead>
            <tbody>
              {vets.map((vet) => (
                <VetShiftRow key={vet.vet_id} vet={vet}></VetShiftRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VetShiftView;

import React, { useEffect, useState } from "react";
import RescuerRow from "./RescuerRow";
import RescuerInfoRow from "./RescuerInfoRow";

const RescuerInfo = () => {
  const [infos, setInfos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/rescuerInfo")
      .then((res) => res.json())
      .then((datam) => {
        setInfos(datam);
      });
  }, []);
  return (
    <div>
      <div className="pt-20 pb-24 pl-0">
        <div className="overflow-x-auto">
          <h1 className="font-semibold text-2xl pb-7 text-blue-700">
            Total Rescue info: {infos.length}
          </h1>
          <table className="table">
            <thead>
              <tr>
                <th className="uppercase text-xs font-extrabold text-center">
                  Rescuer_id
                </th>
                <td className="uppercase text-xs font-extrabold text-center">
                  Rescuer_name
                </td>
                <td className="uppercase text-xs font-extrabold text-center">
                  Rescued_animal_id
                </td>
                <td className="uppercase text-xs font-extrabold text-center">
                  animal type
                </td>
                <td className="uppercase text-xs font-extrabold text-center">
                  animal age
                </td>
                <td className="uppercase text-xs font-extrabold text-center">
                  animal breed
                </td>
                <td className="uppercase text-xs font-extrabold text-center">
                  RESCUE_DATE
                </td>
              </tr>
            </thead>
            <tbody>
              {infos.map((info) => (
                <RescuerInfoRow info={info}></RescuerInfoRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RescuerInfo;

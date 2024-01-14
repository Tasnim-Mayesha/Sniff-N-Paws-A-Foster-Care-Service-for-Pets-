import React, { useEffect, useState } from "react";
import CabinRow from "./CabinRow";

const CabinInfo = () => {
  const [cabins, setCabins] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/cabin_info")
      .then((res) => res.json())
      .then((datam) => {
        setCabins(datam);
      });
  }, []);
  return (
    <div>
      <div className="pt-20 pb-56 pl-0">
        <div className="overflow-x-auto">
          <h1 className="font-semibold text-2xl pb-7 text-blue-700">
            Cabin Info: {cabins.length}
          </h1>
          <table className="table">
            <thead>
              <tr>
                <th className="uppercase text-xs font-extrabold text-left">
                  cabin_no
                </th>
                <td className="uppercase text-xs font-extrabold text-left">
                  capacity
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  current animal count
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  free space
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  cabin type
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  animal type
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  animal ids
                </td>
              </tr>
            </thead>
            <tbody>
              {cabins.map((cabin) => (
                <CabinRow
                  key={cabin.customerAnimalCabin_id}
                  cabin={cabin}
                ></CabinRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CabinInfo;

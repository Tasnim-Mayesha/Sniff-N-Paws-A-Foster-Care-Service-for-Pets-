import React, { useEffect, useState } from "react";
import CabinRow from "./CabinRow";
import CabinInfo from "./CabinInfo";
import CabinInsert from "./CabinInsert";

const Cabin = () => {
  const [cabins, setCabins] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/customer_animal_cabin")
      .then((res) => res.json())
      .then((datam) => {
        setCabins(datam);
      });
  }, []);
  return (
    <div>
      <div>
        <CabinInfo></CabinInfo>
        <CabinInsert></CabinInsert>
      </div>
      <div className="pt-20 pb-56 pl-0">
        <div className="overflow-x-auto">
          <h1 className="font-semibold text-2xl pb-7 text-blue-700">
            Total animal cabin: {cabins.length}
          </h1>
          <table className="table">
            <thead>
              <tr>
                <th className="uppercase text-xs font-extrabold text-left">
                  customer_id
                </th>
                <td className="uppercase text-xs font-extrabold text-left">
                  name
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  Coming-release date
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  Cabin_no
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  Total daycare services
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

export default Cabin;

import React, { useEffect, useState } from "react";
import VetRow from "./VetRow";
import VetInsert from "./VetInsert";
import VetDelete from "./VetDelete";
import VetUpdate from "./VetUpdate";
import VetShiftView from "./VetShiftView";
import VetShift from "./VetShift";
import VetAnimal from "./VetAnimal";

const Vet = () => {
  const [vets, setVets] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/veterinarian")
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
            Total Veterinarians: {vets.length}
          </h1>
          <table className="table">
            <thead>
              <tr>
                <th className="uppercase text-xs font-extrabold text-left">
                  vet_id
                </th>
                <td className="uppercase text-xs font-extrabold text-left">
                  name
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  email
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  gender
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  Address
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  Date of birth
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  Age
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  Salary
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  qualification
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  phone
                </td>
              </tr>
            </thead>
            <tbody>
              {vets.map((vet) => (
                <VetRow key={vet.vet_id} vet={vet}></VetRow>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex pt-20">
          <VetInsert></VetInsert>
          <div className="pl-20">
            <VetDelete></VetDelete>
            <VetUpdate></VetUpdate>
          </div>
        </div>
        <VetShiftView></VetShiftView>
        <VetShift></VetShift>
        <VetAnimal></VetAnimal>
      </div>
    </div>
  );
};

export default Vet;

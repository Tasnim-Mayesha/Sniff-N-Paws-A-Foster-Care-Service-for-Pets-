import React, { useEffect, useState } from "react";
import VetAnimalRow from "./VetAnimalRow";

const VetAnimal = () => {
  const [vets, setVets] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/vet_animal")
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
            Total Veterinarian services to animals: {vets.length}
          </h1>
          <table className="table">
            <thead>
              <tr>
                <th className="uppercase text-xs font-extrabold text-center">
                  vet_id
                </th>
                <td className="uppercase text-xs font-extrabold text-center">
                  vet name
                </td>
                <td className="uppercase text-xs font-extrabold text-center">
                  treated-rescued-animal
                </td>
                <td className="uppercase text-xs font-extrabold text-center">
                  treated-daycare-animal
                </td>
              </tr>
            </thead>
            <tbody>
              {vets.map((vet) => (
                <VetAnimalRow key={vet.vet_id} vet={vet}></VetAnimalRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VetAnimal;

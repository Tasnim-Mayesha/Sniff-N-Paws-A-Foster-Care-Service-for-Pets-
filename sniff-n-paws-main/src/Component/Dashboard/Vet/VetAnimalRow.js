import React from "react";

const VetAnimalRow = ({ vet }) => {
  return (
    <tr>
      <th className="text-center">{vet[0]}</th>
      <td className="text-left">{vet[1]}</td>
      <td className="text-center">{vet[2]}</td>
      <td className="text-center">{vet[3]}</td>
    </tr>
  );
};

export default VetAnimalRow;

import React from "react";

const VetShiftRow = ({ vet }) => {
  return (
    <tr>
      <th className="text-center">{vet[0]}</th>
      <td className="text-center">{vet[1]}</td>
      <td className="text-center">{vet[2]}</td>
    </tr>
  );
};

export default VetShiftRow;

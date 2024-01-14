import React from "react";

const VetRow = ({ vet }) => {
  return (
    <tr>
      <th>{vet[0]}</th>
      <td>{vet[1]}</td>
      <td>{vet[2]}</td>
      <td>{vet[3]}</td>
      <td>{vet[4]}</td>
      <td>{vet[5]}</td>
      <td>{vet[6]}</td>
      <td>{vet[7]}</td>
      <td>{vet[8]}</td>
      <td>{vet[9]}</td>
    </tr>
  );
};

export default VetRow;

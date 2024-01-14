import React from "react";

const RescuerRow = ({ vet }) => {
  return (
    <tr>
      <th>{vet[0]}</th>
      <td>{vet[1]}</td>
      <td>{vet[2]}</td>
    </tr>
  );
};

export default RescuerRow;

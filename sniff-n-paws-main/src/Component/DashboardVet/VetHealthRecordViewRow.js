import React from "react";

const VetHealthRecordViewRow = ({ animal }) => {
  return (
    <tr>
      <th>{animal[0]}</th>
      <td>{animal[1]}</td>
    </tr>
  );
};

export default VetHealthRecordViewRow;

import React from "react";

const HealthRecordRow = ({ healthRecord }) => {
  return (
    <tr>
      <th>{healthRecord[0]}</th>
      <td>{healthRecord[1]}</td>
      <td>{healthRecord[2]}</td>
      <td>{healthRecord[3]}</td>
      <td>{healthRecord[4]}</td>
      <td>{healthRecord[5]}</td>
      <td>{healthRecord[6]}</td>
    </tr>
  );
};

export default HealthRecordRow;

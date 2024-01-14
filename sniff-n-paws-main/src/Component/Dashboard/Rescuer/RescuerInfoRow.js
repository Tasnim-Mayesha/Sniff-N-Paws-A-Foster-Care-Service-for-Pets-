import React from "react";

const RescuerInfoRow = ({ info }) => {
  return (
    <tr>
      <th>{info[0]}</th>
      <td>{info[1]}</td>
      <td>{info[2]}</td>
      <td>{info[3]}</td>
      <td>{info[4]}</td>
      <td>{info[5]}</td>
      <td>{info[6]}</td>
    </tr>
  );
};

export default RescuerInfoRow;

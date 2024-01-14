import React from "react";

const StaffRow = ({ staff }) => {
  return (
    <tr>
      <th>{staff[0]}</th>
      <td>{staff[1]}</td>
      <td>{staff[2]}</td>
      <td>{staff[3]}</td>
      <td>{staff[4]}</td>
      <td>{staff[5]}</td>
      <td>{staff[6]}</td>
      <td>{staff[7]}</td>
      <td>{staff[8]}</td>
    </tr>
  );
};

export default StaffRow;

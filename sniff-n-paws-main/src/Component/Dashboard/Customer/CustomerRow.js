import React from "react";

const CustomerRow = ({ customer }) => {
  return (
    <tr>
      <th>{customer[0]}</th>
      <td>{customer[1]}</td>
      <td>{customer[2]}</td>
      <td>{customer[3]}</td>
      <td>{customer[4]}</td>
      <td>{customer[5]}</td>
      <td>{customer[6]}</td>
      <td>{customer[7]}</td>
    </tr>
  );
};

export default CustomerRow;

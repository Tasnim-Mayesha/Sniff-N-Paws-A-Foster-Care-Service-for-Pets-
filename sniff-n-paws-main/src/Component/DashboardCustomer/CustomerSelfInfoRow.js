import React from "react";

const CustomerSelfInfoRow = ({ customer }) => {
  return (
    <tr>
      <th>{customer[0]}</th>
      <th>{customer[1]}</th>
      <th>{customer[2]}</th>
      <th>{customer[3]}</th>
      <th>{customer[4]}</th>
      <th>{customer[5]}</th>
    </tr>
  );
};

export default CustomerSelfInfoRow;

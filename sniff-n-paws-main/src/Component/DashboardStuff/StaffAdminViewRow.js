import React from "react";

const StaffAdminViewRow = ({ admin }) => {
  return (
    <tr>
      <th>{admin[0]}</th>
      <th>{admin[1]}</th>
      <th>{admin[2]}</th>
      <th>{admin[3]}</th>
      <th>{admin[4]}</th>
    </tr>
  );
};

export default StaffAdminViewRow;

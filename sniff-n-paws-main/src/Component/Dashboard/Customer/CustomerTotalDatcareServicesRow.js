import React from "react";

const CustomerTotalDatcareServicesRow = ({ totalDatcareService }) => {
  return (
    <tr>
      <th>{totalDatcareService[0]}</th>
      <td>{totalDatcareService[1]}</td>
      <td>{totalDatcareService[2]}</td>
    </tr>
  );
};

export default CustomerTotalDatcareServicesRow;

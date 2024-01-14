import React from "react";

const CustomerPricingRow = ({ customerPricing }) => {
  return (
    <tr>
      <th>{customerPricing[0]}</th>
      <td>{customerPricing[1]}</td>
      <td>{customerPricing[2]}</td>
      <td>{customerPricing[3]}</td>
    </tr>
  );
};

export default CustomerPricingRow;

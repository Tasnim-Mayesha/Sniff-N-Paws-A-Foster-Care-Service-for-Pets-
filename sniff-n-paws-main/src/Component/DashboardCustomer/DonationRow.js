import React from "react";

const DonationRow = ({ donation }) => {
  return (
    <tr>
      <th>{donation[0]}</th>
      <th>{donation[1]}</th>
    </tr>
  );
};

export default DonationRow;

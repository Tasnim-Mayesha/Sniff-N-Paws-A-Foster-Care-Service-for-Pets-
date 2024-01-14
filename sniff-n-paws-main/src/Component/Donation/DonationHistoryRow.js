import React from "react";

const DonationHistoryRow = ({ donation }) => {
  return (
    <tr>
      <td>{donation[0]}</td>
      <td>{donation[2]}</td>
      <td>{donation[3]}</td>
    </tr>
  );
};

export default DonationHistoryRow;

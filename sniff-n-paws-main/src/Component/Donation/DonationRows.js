import React from "react";

const DonationRows = ({ donation }) => {
  return (
    <tr>
      <td>{donation[0]}</td>
      <td>{donation[1]}</td>
      <td>{donation[2]}</td>
      <td>{donation[3]}</td>
      <td>{donation[4]}</td>
      <td>{donation[5]}</td>
    </tr>
  );
};

export default DonationRows;

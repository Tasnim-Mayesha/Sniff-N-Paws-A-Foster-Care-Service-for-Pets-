import React, { useEffect, useState } from "react";
import DonationRow from "./DonationRow";

const CustomerDonation = () => {
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3002/customer_selfDonation`)
      .then((res) => res.json())
      .then((datam) => {
        setDonations(datam);
      });
  }, []);
  return (
    <div className="pt-20 pb-56 pl-0">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th className="uppercase text-xs font-extrabold text-left">
                AMOUNT
              </th>
              <td className="uppercase text-xs font-extrabold text-left">
                Donation Date
              </td>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <DonationRow donation={donation}></DonationRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerDonation;

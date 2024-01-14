import React, { useEffect, useState } from "react";
import DonationRows from "./DonationRows";

const DonationNonCustomer = () => {
  const [donations, setdonations] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/non_customer_donation")
      .then((res) => res.json())
      .then((datam) => {
        setdonations(datam);
      });
  }, []);
  return (
    <div className="pt-20 pb-40 pl-0">
      <div className="overflow-x-auto px-32">
        <h1 className="font-semibold text-2xl pb-7 text-blue-700">
          Total Donations from non-customers: {donations.length}
        </h1>
        <div>
          <table className="table">
            <thead>
              <tr>
                <td className="uppercase text-xs font-extrabold text-left">
                  Donation Id
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  NAME
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  total-AMOUNT
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  DATE
                </td>
              </tr>
            </thead>
            <tbody>
              {donations.map((donation) => (
                <DonationRows
                  key={donation.feedback_id}
                  donation={donation}
                ></DonationRows>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DonationNonCustomer;

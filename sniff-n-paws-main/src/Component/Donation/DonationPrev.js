import React, { useEffect, useState } from "react";
import DonationRows from "./DonationRows";

const DonationPrev = () => {
  const [donations, setdonations] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/donation")
      .then((res) => res.json())
      .then((datam) => {
        setdonations(datam);
      });
  }, []);
  return (
    <div className="pt-20 pb-40 pl-0">
      <div className="overflow-x-auto px-32">
        <h1 className="font-semibold text-2xl pb-7 text-blue-700">
          Total Donations for pets 🐱 🐶 🐰: {donations.length}
        </h1>
        <div>
          <table className="table">
            <thead>
              <tr>
                <td className="uppercase text-xs font-extrabold text-left">
                  INDEX
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  DONATor_NAME
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  Donated AMOUNT
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  DONATION DATE
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  CUSTOMER ID
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

export default DonationPrev;

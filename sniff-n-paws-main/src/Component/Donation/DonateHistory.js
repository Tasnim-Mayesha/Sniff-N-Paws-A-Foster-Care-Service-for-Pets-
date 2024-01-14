import React, { useEffect, useState } from "react";
import DonationHistoryRow from "./DonationHistoryRow";

const DonateHistory = () => {
  const [donations, setdonations] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/donation")
      .then((res) => res.json())
      .then((datam) => {
        setdonations(datam);
      });
  }, []);
  return (
    <div>
      <div className="pt-20 pb-28 pl-0">
        <div className="overflow-x-auto px-32">
          <h1 className="font-semibold text-2xl pb-7 text-blue-700">
            Your Previous Donations: {donations.length}
          </h1>
          <div>
            <table className="table">
              <thead>
                <tr>
                  <td className="uppercase text-xs font-extrabold text-left">
                    INDEX
                  </td>

                  <td className="uppercase text-xs font-extrabold text-left">
                    Donated AMOUNT
                  </td>
                  <td className="uppercase text-xs font-extrabold text-left">
                    DONATION DATE
                  </td>
                </tr>
              </thead>
              <tbody>
                {donations.map((donation) => (
                  <DonationHistoryRow
                    key={donation.feedback_id}
                    donation={donation}
                  ></DonationHistoryRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateHistory;

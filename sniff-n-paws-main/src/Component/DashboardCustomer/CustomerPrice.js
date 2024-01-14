import React, { useEffect, useState } from "react";
import CustomerPriceRow from "./CustomerPriceRow";

const CustomerPrice = () => {
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3002/customer_selfPrice`)
      .then((res) => res.json())
      .then((data) => {
        setDonations(data);
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
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <CustomerPriceRow donation={donation}></CustomerPriceRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerPrice;

import React, { useEffect, useState } from "react";
import CustomerPricingRow from "./CustomerPricingRow";

const CustomerPricing = () => {
  const [customerPricings, setCustomerPricings] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/customer_pricing")
      .then((res) => res.json())
      .then((datam) => {
        setCustomerPricings(datam);
      });
  }, []);

  return (
    <div>
      <div className="pt-20 pb-56 pl-0">
        <div className="overflow-x-auto">
          <h1 className="font-semibold text-2xl pb-7 text-blue-700">
            Total customer pricing: {customerPricings.length}
          </h1>
          <table className="table">
            <thead>
              <tr>
                <th className="uppercase text-xs font-extrabold text-left">
                  customer_id
                </th>
                <td className="uppercase text-xs font-extrabold text-left">
                  name
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  email
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  pricing
                </td>
              </tr>
            </thead>
            <tbody>
              {customerPricings.map((customerPricing) => (
                <CustomerPricingRow
                  key={customerPricing.customerPricing_id}
                  customerPricing={customerPricing}
                ></CustomerPricingRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerPricing;

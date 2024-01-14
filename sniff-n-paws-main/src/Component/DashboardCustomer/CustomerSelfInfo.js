import React, { useEffect, useState } from "react";
import CustomerSelfInfoRow from "./CustomerSelfInfoRow";

const CustomerSelfInfo = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3002/customer_selfInfo`)
      .then((res) => res.json())
      .then((datam) => {
        setCustomers(datam);
      });
  }, []);
  return (
    <div className="pt-20 pb-56 pl-0">
      <div className="overflow-x-auto">
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
                gender
              </td>
              <td className="uppercase text-xs font-extrabold text-left">
                Address
              </td>
              <td className="uppercase text-xs font-extrabold text-left">
                Date of birth
              </td>
              <td className="uppercase text-xs font-extrabold text-left">
                Age
              </td>
              <td className="uppercase text-xs font-extrabold text-left">
                Home
              </td>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <CustomerSelfInfoRow
                key={customer.customer_id}
                customer={customer}
              ></CustomerSelfInfoRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerSelfInfo;

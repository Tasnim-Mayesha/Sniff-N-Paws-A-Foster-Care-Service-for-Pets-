import React, { useEffect, useState } from "react";
import StaffProfileRow from "./StaffProfileRow";

const StaffProfile = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3002/staff_selfInfo`)
      .then((res) => res.json())
      .then((datam) => {
        setCustomers(datam);
      });
  }, []);
  return (
    <div>
      {customers.map((customer) => (
        <StaffProfileRow
          key={customer.customer_id}
          customer={customer}
        ></StaffProfileRow>
      ))}
    </div>
  );
};

export default StaffProfile;

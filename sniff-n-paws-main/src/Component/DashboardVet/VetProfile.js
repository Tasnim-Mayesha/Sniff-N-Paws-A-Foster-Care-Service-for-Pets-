import React, { useEffect, useState } from "react";
import VetProfileRow from "./VetProfileRow";

const VetProfile = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3002/vet_selfInfo`)
      .then((res) => res.json())
      .then((datam) => {
        setCustomers(datam);
      });
  }, []);
  return (
    <div>
      {customers.map((customer) => (
        <VetProfileRow
          key={customer.customer_id}
          customer={customer}
        ></VetProfileRow>
      ))}
    </div>
  );
};

export default VetProfile;

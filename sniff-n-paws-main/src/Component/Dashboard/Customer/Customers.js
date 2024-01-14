import React from "react";
import Customer from "./Customer";
import CustomerPricing from "./CustomerPricing";
import CustomerTotalDatcareServices from "./CustomerTotalDatcareServices";

const Customers = () => {
  return (
    <div>
      <Customer></Customer>
      <CustomerPricing></CustomerPricing>
      <CustomerTotalDatcareServices></CustomerTotalDatcareServices>
    </div>
  );
};

export default Customers;

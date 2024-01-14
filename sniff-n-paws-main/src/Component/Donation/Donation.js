import React from "react";
import DonationCustomer from "./DonationCustomer";
import DonationNonCustomer from "./DonationNonCustomer";
import DonateHistory from "./DonateHistory";

const Donation = () => {
  return (
    <div>
      <DonateHistory></DonateHistory>
      <DonationCustomer></DonationCustomer>
      <DonationNonCustomer></DonationNonCustomer>
    </div>
  );
};

export default Donation;

import React from "react";
import DonationAdd from "./DonationAdd";
import DonateHistory from "./DonateHistory";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link } from "react-router-dom";

const Donate = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div>
      {user ? (
        <div className="grid grid-cols-2">
          <DonateHistory></DonateHistory>
          <DonationAdd></DonationAdd>
        </div>
      ) : (
        <div>
          <DonationAdd></DonationAdd>
        </div>
      )}
    </div>
  );
};

export default Donate;

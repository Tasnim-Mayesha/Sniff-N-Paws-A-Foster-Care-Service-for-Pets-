import React, { useEffect, useState } from "react";
import CustomerTotalDatcareServicesRow from "./CustomerTotalDatcareServicesRow";

const CustomerTotalDatcareServices = () => {
  const [totalDatcareServices, settotalDatcareServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/total_daycare_services")
      .then((res) => res.json())
      .then((datam) => {
        settotalDatcareServices(datam);
      });
  }, []);

  return (
    <div>
      <div className="pt-20 pb-56 pl-0">
        <div className="overflow-x-auto">
          <h1 className="font-semibold text-2xl pb-7 text-blue-700">
            Total Daycare Services: {totalDatcareServices.length}
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
                  Count
                </td>
              </tr>
            </thead>
            <tbody>
              {totalDatcareServices.map((totalDatcareService) => (
                <CustomerTotalDatcareServicesRow
                  key={totalDatcareService.customerPricing_id}
                  totalDatcareService={totalDatcareService}
                ></CustomerTotalDatcareServicesRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerTotalDatcareServices;

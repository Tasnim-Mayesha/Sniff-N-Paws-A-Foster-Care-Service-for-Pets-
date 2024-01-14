import React, { useEffect, useState } from "react";
import AdminUserRow from "../Dashboard/Admin/AdminUserRow";
import StaffAdminViewRow from "./StaffAdminViewRow";
const StaffAdminView = () => {
  const [admins, setAdmins] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/all_gen_admin_view")
      .then((res) => res.json())
      .then((datam) => {
        setAdmins(datam);
      });
  }, []);

  return (
    <div className="pt-20 pb-56 pl-0">
      <div className="overflow-x-auto">
        <h1 className="font-semibold text-2xl pb-7 text-blue-700">
          Total Admins: {admins.length}
        </h1>
        <table className="table">
          <thead>
            <tr>
              <th className="uppercase text-xs font-extrabold text-left">
                admin_id
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
                Designation
              </td>
              <td className="uppercase text-xs font-extrabold text-left">
                phone
              </td>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => (
              <StaffAdminViewRow admin={admin}></StaffAdminViewRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default StaffAdminView;

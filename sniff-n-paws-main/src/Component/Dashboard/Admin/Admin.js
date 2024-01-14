import React, { useEffect, useState } from "react";
import AdminUserRow from "./AdminUserRow";
import AdminInsertForm from "./AdminInsertForm";
import AdminDeleteForm from "./AdminDeleteForm";
import AdminUpdateForm from "./AdminUpdateForm";
import { Link } from "react-router-dom";

const Admin = () => {
  const [admins, setAdmins] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/admin")
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
                Address
              </td>
              <td className="uppercase text-xs font-extrabold text-left">
                Date of birth
              </td>
              <td className="uppercase text-xs font-extrabold text-left">
                Age
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
              <AdminUserRow key={admin.admin_id} admin={admin}></AdminUserRow>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex pt-48">
        <AdminInsertForm></AdminInsertForm>
        <div className="pl-20">
          <AdminDeleteForm></AdminDeleteForm>
          <AdminUpdateForm></AdminUpdateForm>
        </div>
      </div>
    </div>
  );
};
export default Admin;

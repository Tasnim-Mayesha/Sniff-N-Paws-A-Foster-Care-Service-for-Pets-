import React, { useEffect, useState } from "react";
import StaffFindCabinRow from "./StaffFindCabinRow";

const StaffFindCabin = () => {
  const [staffs, setStaffs] = useState([]);
  const [formData, setFormData] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.toString() });
  };
  useEffect(() => {
    fetch(`http://localhost:3002/staff_find_cabin/${formData.name}`)
      .then((res) => res.json())
      .then((datam) => {
        setStaffs(datam);
      });
  }, []);

  return (
    <div>
      <input
        type="text"
        id="name"
        name="name"
        className="input input-bordered input-sm w-full max-w-xs"
        value={formData.name}
        placeholder=""
        onChange={handleInputChange}
      />
      <div className="pt-20 pb-56 pl-0">
        <div className="overflow-x-auto">
          <h1 className="font-semibold text-2xl pb-7 text-blue-700">
            Total Staffs: {staffs.length}
          </h1>
          <table id="myTable" className="table">
            <thead>
              <tr>
                <th className="uppercase text-xs font-extrabold text-left">
                  staff_id
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
                  Salary
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  Phone
                </td>
              </tr>
            </thead>
            <tbody>
              {staffs.map((staff) => (
                <StaffFindCabinRow
                  key={staff.staff_id}
                  staff={staff}
                ></StaffFindCabinRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StaffFindCabin;

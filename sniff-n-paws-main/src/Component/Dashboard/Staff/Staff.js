import React, { useEffect, useState } from "react";
import StaffRow from "./StaffRow";
import StaffInsert from "./StaffInsert";
import StaffDelete from "./StaffDelete";
import StaffUpdate from "./StaffUpdate";
import StaffSpecialization from "./StaffSpecialization";

const Staff = () => {
  const [staffs, setStaffs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/staff")
      .then((res) => res.json())
      .then((datam) => {
        setStaffs(datam);
      });
  }, []);
  const handleSearch = () => {
    // Declare variables
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  };

  return (
    <div>
      <StaffSpecialization></StaffSpecialization>
      <div className="text-center pt-20">
        <input
          type="text"
          id="myInput"
          onChange={handleSearch}
          placeholder="Search for names by emails"
          className="border-2 input-lg"
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
                  <StaffRow key={staff.staff_id} staff={staff}></StaffRow>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex pt-20">
            <StaffInsert></StaffInsert>
            <div className="pl-20">
              <StaffDelete></StaffDelete>
              <StaffUpdate></StaffUpdate>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;

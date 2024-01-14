import React, { useEffect, useState } from "react";
import CustomerRow from "./CustomerRow";
import CustomerDelete from "./CustomerDelete";
import CustomerUpdate from "./CustomerUpdate";

const Customer = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/customer")
      .then((res) => res.json())
      .then((datam) => {
        setCustomers(datam);
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
    <div className="text-center pt-20">
      <input
        type="text"
        id="myInput"
        onChange={handleSearch}
        placeholder="Search for names by emails"
        className="border-2 input-md"
      />
      <div className="pt-20 pb-56 pl-0">
        <div className="overflow-x-auto">
          <h1 className="font-semibold text-2xl pb-7 text-blue-700">
            Total Customers: {customers.length}
          </h1>
          <table id="myTable" className="table">
            <thead>
              <tr>
                <th className="uppercase text-xs font-extrabold text-left">
                  id
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
                  phone
                </td>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <CustomerRow customer={customer}></CustomerRow>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex gap-40 pt-40 ">
          <CustomerDelete></CustomerDelete>
          <CustomerUpdate></CustomerUpdate>
        </div>
      </div>
    </div>
  );
};

export default Customer;

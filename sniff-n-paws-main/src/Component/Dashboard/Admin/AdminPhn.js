// import React, { useEffect, useState } from "react";
// import AdminPhnRow from "./AdminPhnRow";

// const AdminPhn = () => {
//   const [admins, setAdmins] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:5000/adminphone")
//       .then((res) => res.json())
//       .then((datam) => {
//         setAdmins(datam);
//       });
//   }, []);
//   return (
//     <div className="pt-40 pb-56">
//       <div className="overflow-x-auto">
//         <h1 className="font-semibold text-2xl text-blue-700">
//           Total Admins: {admins.length}
//         </h1>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>admin_id</th>
//               <td>Phone</td>
//               <td>delete</td>
//             </tr>
//           </thead>
//           <tbody>
//             {admins.map((admin) => (
//               <AdminPhnRow key={admin.admin_id} admin={admin}></AdminPhnRow>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AdminPhn;

// import React, { useEffect, useState } from "react";
// import HealthRecordRow from "./HealthRecordRow";

// const HealthRecord = () => {
//   const [healthRecords, setHealthRecords] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:3002/health_record")
//       .then((res) => res.json())
//       .then((datam) => {
//         setHealthRecords(datam);
//       });
//   }, []);
//   return (
//     <div>
//       <div className="pt-40 pb-40">
//         <div className="overflow-x-auto">
//           <h1 className="font-semibold text-2xl text-blue-700">
//             Total Health Record: {healthRecords.length}
//           </h1>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>Record id</th>
//                 <td>Rabies</td>
//                 <td>Rabies date</td>
//                 <td>Flu</td>
//                 <td>Flu date</td>
//                 <td>Spay/Neuter</td>
//                 <td>Animal_id</td>
//               </tr>
//             </thead>
//             <tbody>
//               {healthRecords.map((healthRecord) => (
//                 <HealthRecordRow
//                   key={healthRecord.index}
//                   healthRecord={healthRecord}
//                 ></HealthRecordRow>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HealthRecord;
import React from "react";

const HealthRecord = () => {
  return <div></div>;
};

export default HealthRecord;

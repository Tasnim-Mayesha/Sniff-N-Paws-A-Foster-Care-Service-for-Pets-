import React from "react";

const StaffProfileRow = ({ customer }) => {
  return (
    <div className="pb-10">
      <div className="w-96 p-6 bg-blue-50 rounded-lg shadow-xl">
        <div key={customer[0]} className="mb-6">
          <h2 className="text-2xl font-bold mb-2">{customer[1]}</h2>
          <p className="font-bold mb-1">
            <strong className="text-blue-800 font-extrabold mb-1">
              Email:
            </strong>
            {customer[2]}
          </p>
          <p className="font-bold mb-1">
            <strong className="text-blue-800 font-extrabold mb-1">
              Gender:
            </strong>{" "}
            {customer[3]}
          </p>
          <p className="font-bold mb-1">
            <strong className="text-blue-800 font-extrabold mb-1">
              Address:
            </strong>{" "}
            {customer[4]}
          </p>
          <p className="font-bold mb-1">
            <strong className="text-blue-800 font-extrabold mb-1">
              Date of Birth:
            </strong>{" "}
            {customer[5]}
          </p>
          <p className="font-bold mb-1">
            <strong className="text-blue-800 font-extrabold mb-1">Age:</strong>{" "}
            {customer[6]}
          </p>
          <p className="font-bold mb-1">
            <strong className="text-blue-800 font-extrabold mb-1">
              Salary:
            </strong>{" "}
            {customer[7]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StaffProfileRow;

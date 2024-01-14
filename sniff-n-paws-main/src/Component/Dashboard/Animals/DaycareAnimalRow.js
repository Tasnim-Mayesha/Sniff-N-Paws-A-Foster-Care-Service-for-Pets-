import React from "react";

const DaycareAnimalRow = ({ animal }) => {
  return (
    <tr>
      <th>{animal[0]}</th>
      <td>{animal[1]}</td>
      <td>{animal[2]}</td>
      <td>{animal[3]}</td>
      <td>{animal[4]}</td>
      <td>{animal[5]}</td>
      <td>{animal[6]}</td>
    </tr>
  );
};

export default DaycareAnimalRow;

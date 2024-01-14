import React from 'react';

const RescuedAnimalRow = ({ animal }) => {
  return (
    <tr>
      <th>{animal[0]}</th>
      <td>{animal[1]}</td>
      <td>{animal[2]}</td>
      <td>{animal[3]}</td>
      <td>{animal[4]}</td>
      <td>{animal[5]}</td>
      <td>{animal[6]}</td>
      <td>{animal[7]}</td>
      <td>{animal[8]}</td>
      
    </tr>
  );
};

export default RescuedAnimalRow;
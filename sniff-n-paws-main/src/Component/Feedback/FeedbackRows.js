import React from "react";

const FeedbackRows = ({ feedback }) => {
  return (
    <tr>
      <td>{feedback[0]}</td>
      <td>{feedback[1]}</td>
      <td>{feedback[2]}</td>
      <td>{feedback[3]}</td>
      <td>{feedback[4]}</td>
      <td>{feedback[5]}</td>
    </tr>
  );
};

export default FeedbackRows;

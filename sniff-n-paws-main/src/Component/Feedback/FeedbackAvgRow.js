import React from "react";

const FeedbackAvgRow = ({ feedback }) => {
  return (
    <tr>
      <th className="text-center">{feedback[0]}</th>
      <td className="text-center">{feedback[1]}</td>
    </tr>
  );
};

export default FeedbackAvgRow;

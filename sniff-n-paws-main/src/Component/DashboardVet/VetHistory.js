import React from "react";
import VetHealthRecordView from "./VetHealthRecordView";
import VetUpdateHealthRecord from "./VetUpdateHealthRecord";
import DiseaseVet from "./DiseaseVet";

const VetHistory = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      <VetHealthRecordView></VetHealthRecordView>
      <DiseaseVet></DiseaseVet>
      <VetUpdateHealthRecord></VetUpdateHealthRecord>
    </div>
  );
};

export default VetHistory;

import React from "react";
import InsuranceType from './InsuranceType'

const InsuranceTypesList = ({insuranceTypes, handleTab, activeTab}) => {
  return (
    <div className="flex gap-x-[28px] mt-[18px] select-none">
      {insuranceTypes.length !== 0
        ? insuranceTypes.map((type, i) => (
            <InsuranceType
              key={i}
              type={type}
              handleTab={handleTab}
              activeTab={activeTab}
              i={i}
            />
          ))
        : "loading error"}
      <span className="px-[20px] py-[9px] cursor-pointer text-white hover:underline text-[18px] font-[700] ">
        Altele <span className="ml-[5px]">&rarr;</span>
      </span>
    </div>
  );
};

export default InsuranceTypesList;

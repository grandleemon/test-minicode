import React from 'react'

const InsuranceType = ({activeTab, handleTab, type, i}) => {
  return (
    <div 
    onClick={() => handleTab(i, type)} 
    className={`px-[30px] py-[9px] bg-white rounded-[7px] cursor-pointer border-[1px] border-[#E7E5E4] 
        ${activeTab === i 
        ? "active-tab" 
        : ""}` }>
        <span className={`text-[18px] ${activeTab === i ? "gradient-tab font-face-pt-bold" : ""}`} >
          {type}
          </span>
    </div>
  )
}

export default InsuranceType;
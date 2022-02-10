import React from 'react'

const ProgressBar = ({progressBar, currentActiveStep}) => {
  return (
    <div className="right-sidebar absolute right-0 top-[100px] border-l-[1px] w-[100px] flex flex-col items-center py-[40px] select-none">
        {progressBar.map((circle, i) => {
            return (
                <div className="flex flex-col items-center">
                    <div className={`step-circle w-[35px] h-[35px] border-[2px] rounded-full flex items-center justify-center 
                        ${currentActiveStep >= circle.value && circle.value !== 0 ? "completed-step border-[#00834B]" : ""} 
                        ${circle.value === 0 && "border-[#00834B]"}`}>
                            {circle.value === 0 
                            ? <div className={`w-[11px] h-[11px] rounded-full bg-[#00834B]`}></div> 
                            : "" }
                        <span className="font-[700]">
                            {currentActiveStep >= circle.value 
                            ? <span className={`text-white ${circle.value === 0 && "hidden"}`}>&#10003;</span> 
                            : circle.value}
                        </span>
                    </div> 
                    {i + 1 < progressBar.length 
                    ? <hr className={`h-[210px] border-[1px] ${currentActiveStep > circle.value 
                        ? "border-[#00834B]" 
                        : "border-[#E7E5E4]"}`}/> 
                    : ""}
                </div>
            )
        })}
    </div>
  )
}

export default ProgressBar
import { useState } from 'react'
import Accordion from './Accordion'
import InsuranceCards from './InsuranceCards'
import ProgressBar from './ProgressBar'

const GeneralInfo = ({cards, accordion, progressBar, activeTitle}) => {
    const [activeCard, setActiveCard] = useState(null)
    const [activeIndex, setActiveIndex] = useState(0)
    let [currentActiveStep, setCurrentActiveStep] = useState(0) 

    const nextStep = () => {
        if(currentActiveStep > 2) return;
        setCurrentActiveStep(currentActiveStep + 1)
    }

    const prevStep = () => {
        if(currentActiveStep < 1) return;
        setCurrentActiveStep(currentActiveStep - 1)
    }

    const setActiveCardInLocalStorage = (i, info) => {
        setActiveCard(i)
        localStorage.setItem(activeTitle, info)
    }

  return (
    <div>
        <div>
            <div className="mt-[40px] grid grid-cols-2 gap-x-[20px]">
                <InsuranceCards cards={cards} activeCard={activeCard} setActiveCardInLocalStorage={setActiveCardInLocalStorage}/>
                <Accordion accordion={accordion} setActiveIndex={setActiveIndex} activeIndex={activeIndex}/>
            </div>
            <div className="w-[50%] flex justify-between text-[18px] items-center mt-[45px]">
                <button className={`px-[30px] py-[9px] bg-white border-[1px] border-[#A40731] font-[700] rounded-[7px] w-[145px] flex items-center justify-center disabled:opacity-50`}
                onClick={prevStep} disabled={currentActiveStep < 1 ? true : false || activeCard === null ? true : false}>
                    <span className="font-[400] mr-[12px]">&#8592;</span> 
                    Înapoi
                </button>
                <button className={`text-white px-[30px] py-[9px] bg-[#A40731] border-[1px] border-[#A40731] font-[700] rounded-[7px] w-[145px] flex items-center justify-center
                disabled:opacity-50`} 
                disabled={currentActiveStep > 2 ? true : false || activeCard === null ? true : false} onClick={nextStep}>
                    Înainte
                    <span className="font-[400] ml-[12px]">&#8594;</span> 
                </button>
            </div>  
        </div>
                <ProgressBar progressBar={progressBar} currentActiveStep={currentActiveStep}/>
            </div>
  )
}

export default GeneralInfo
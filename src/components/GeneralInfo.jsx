import { useState } from 'react'
import car from './../assets/car.svg'
import { AccordionItem } from '../components/Collapsible'

const GeneralInfo = ({cards, accordion, progressBar, activeTitle}) => {
    const [activeCard, setActiveCard] = useState(null)
    const [activeIndex, setActiveIndex] = useState(0)
    let [currentActive, setCurrentActive] = useState(0) 

    const nextStep = () => {
        if(currentActive > 2) return;
        setCurrentActive(currentActive + 1)
    }

    const prevStep = () => {
        if(currentActive < 1) return;
        setCurrentActive(currentActive - 1)
    }

    const setActiveCardInLocalStorage = (i, info) => {
        setActiveCard(i)
        localStorage.setItem(activeTitle, info)
    }

  return (
    <div>
        <div>
            <div className="mt-[40px] grid grid-cols-2 gap-x-[20px]">
                <div className="grid grid-cols-3 grid-rows-3 gap-[20px] select-none">
                    {cards?.map((card, i) => (
                        <div key={i} className={`card-item border-[1px] w-[200px] min-h-[125px] px-[20px] py-[13px] bg-white rounded-[7px] flex flex-col items-center justify-center 
                        text-center shadow-[0_5px_15px_2px_rgba(0,0,0,0.05)] hover:bg-[#a4073109] cursor-pointer ${activeCard === i ? "border-[#A40731] font-[700] card-item-active" : ""}`}
                        onClick={() => setActiveCardInLocalStorage(i, card.info)}>
                            <div className={`${activeCard === i ? "logo-item-active" : ""} mt-[17px]`}>
                                <img src={car} alt="card-image" className="" />
                            </div>
                            <span className="mt-[17px]">{card.info}</span>
                        </div>
                    ))}
                </div>

                        <div className="w-[100%] select-none mt-[-20px]">
                            {accordion.map((card, index) => {
                                const showDescription = index === activeIndex ? "collapse-content-active" : "";
                                const changeIcon = index === activeIndex ? "plus-active" : "";
                                return (
                                <AccordionItem
                                key={index} 
                                title={card.title} 
                                second 
                                description={card.description} 
                                showDescription={showDescription} 
                                changeIcon={changeIcon}
                                setActiveIndex={() => setActiveIndex(index)} />)
                            })}
                        </div>
                    </div>
                    <div className="w-[50%] flex justify-between text-[18px] items-center mt-[45px]">
                        <button className={`px-[30px] py-[9px] bg-white border-[1px] border-[#A40731] font-[700] rounded-[7px] w-[145px] flex items-center justify-center disabled:opacity-50`}
                        onClick={prevStep} disabled={currentActive < 1 ? true : false || activeCard === null ? true : false}>
                            <span className="font-[400] mr-[12px]">&#8592;</span> 
                            Înapoi
                        </button>
                        <button className={`text-white px-[30px] py-[9px] bg-[#A40731] border-[1px] border-[#A40731] font-[700] rounded-[7px] w-[145px] flex items-center justify-center
                        disabled:opacity-50`} 
                        disabled={currentActive > 2 ? true : false || activeCard === null ? true : false} onClick={nextStep}>
                            Înainte
                            <span className="font-[400] ml-[12px]">&#8594;</span> 
                        </button>
                    </div>  
                </div>

                <div className="right-sidebar absolute right-0 top-[100px] border-l-[1px] w-[100px] flex flex-col items-center py-[40px] select-none">
                    {progressBar.map((circle, i) => {
                        return (
                            <div className="flex flex-col items-center">
                                <div className={`step-circle w-[35px] h-[35px] border-[2px] rounded-full flex items-center justify-center 
                                    ${currentActive >= circle.value && circle.value !== 0 ? "completed-step border-[#00834B]" : ""} 
                                    ${circle.value === 0 && "border-[#00834B]"}`}>
                                        {circle.value === 0 
                                        ? <div className={`w-[11px] h-[11px] rounded-full bg-[#00834B]`}></div> 
                                        : "" }
                                    <span className="font-[700]">
                                        {currentActive >= circle.value 
                                        ? <span className={`text-white ${circle.value === 0 && "hidden"}`}>&#10003;</span> 
                                        : circle.value}
                                    </span>
                                </div> 
                                {i + 1 < progressBar.length 
                                ? <hr className={`h-[210px] border-[1px] ${currentActive > circle.value 
                                    ? "border-[#00834B]" 
                                    : "border-[#E7E5E4]"}`}/> 
                                : ""}
                            </div>
                            )
                    })}
                </div>
            </div>
  )
}

export default GeneralInfo
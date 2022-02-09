
export const AccordionItem = ({title, second, setActiveIndex, showDescription, description, changeIcon}) => {

  return (
    <div>
        <div 
            className={`plus w-[100%] bg-white rounded-[7px] px-[20px] py-[11px] cursor-pointer flex justify-between items-center 
            ${changeIcon} 
            ${second && "mt-[20px]"}`}
            onClick={setActiveIndex}>
                <h3 className="font-[700] text-[#42403F] text-[18px]">{title}</h3> 
            </div>
            <div className={`collapse-content overflow-y-auto w-[657px] bg-white pl-[20px] rounded-b-[7px] ${showDescription}`}>
                <div className="w-[97%] ">
                    {description}
                </div>
            </div>
    </div>
  )
}



import car from './../assets/car.svg'

const InsuranceCards = ({cards, activeCard, setActiveCardInLocalStorage}) => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-[20px] select-none">
      {cards?.map((card, i) => (
        <div
          key={i}
          className={`card-item border-[1px] w-[200px] min-h-[125px] px-[20px] py-[13px] bg-white rounded-[7px] flex flex-col items-center justify-center 
                        text-center shadow-[0_5px_15px_2px_rgba(0,0,0,0.05)] hover:bg-[#a4073109] cursor-pointer ${
                          activeCard === i
                            ? "border-[#A40731] font-[700] card-item-active"
                            : ""
                        }`}
          onClick={() => setActiveCardInLocalStorage(i, card.info)}
        >
          <div
            className={`${
              activeCard === i ? "logo-item-active" : ""
            } mt-[17px]`}
          >
            <img src={car} alt="card-image" className="" />
          </div>
          <span className="mt-[17px]">{card.info}</span>
        </div>
      ))}
    </div>
  );
};

export default InsuranceCards;

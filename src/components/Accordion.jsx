import React from "react";
import {AccordionItem} from "./AccordionItem"

const Accordion = ({accordion, activeIndex, setActiveIndex}) => {
  return (
    <div className="w-[100%] select-none mt-[-20px]">
      {accordion.map((card, index) => {
        const showDescription =
          index === activeIndex ? "collapse-content-active" : "";
        const changeIcon = index === activeIndex ? "plus-active" : "";
        return (
          <AccordionItem
            key={index}
            title={card.title}
            second
            description={card.description}
            showDescription={showDescription}
            changeIcon={changeIcon}
            setActiveIndex={() => setActiveIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default Accordion;

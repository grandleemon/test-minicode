import React from "react";


const LeftSidebarItem = ({children, icon}) => {
  return (
    <div className="group flex flex-col justify-center items-center cursor-pointer p-[25px]">
      <img src={icon} alt="phone-icon" />
      <div className="mt-[10px]">
        <span className="group-hover:underline">{children}</span>
      </div>
    </div>
  );
};

export default LeftSidebarItem;

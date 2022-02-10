import React from "react";

const Menu = ({handleMenu}) => {
  return (
    <div className="absolute top-0 left-0 z-[100] h-[100vh] w-[100%] bg-white/10 backdrop-blur-[25px] opacity-100 transition-all duration-500">
      <div className="h-[100vh] bg-white w-[300px] menu-wrapper border-r-[2px] font-face-pt-bold flex flex-col">
        <div className="flex justify-between items-center p-[30px]">
          <div className="font-[800] text-[26px]">Menu</div>
          <div onClick={handleMenu} className="text-black cursor-pointer">
            &#10006;
          </div>
        </div>

        <nav>
          <ul className="text-[20px] flex flex-col gap-[20px] items-center">
            <li>
              <a
                href="#"
                className="px-[80px] py-[10px] hover:bg-[#A40731] hover:text-white duration-300"
              >
                Menu item #1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-[80px] py-[10px] hover:bg-[#A40731] hover:text-white duration-300"
              >
                Menu item #2
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-[80px] py-[10px] hover:bg-[#A40731] hover:text-white duration-300"
              >
                Menu item #3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-[80px] py-[10px] hover:bg-[#A40731] hover:text-white duration-300"
              >
                Menu item #4
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;

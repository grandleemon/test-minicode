import { useState } from 'react'

import menuIcon from './../assets/menu-icon.svg'
import logo from './../assets/logo.png'
import loginIcon from './../assets/login-icon.svg'
import registrationIcon from './../assets/registration-icon.svg'

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false)

  const handleMenu = () => {
    setActiveMenu(!activeMenu)
  }

  return (
    <header className={`h-[100px] bg-white w-[100%] border-[#E7E5E4] border-b-[1px] flex items-center justify-between`}>

    <div className="flex items-center justify-between w-[334px]">
      <img src={menuIcon} alt="menu-icon" className="w-[32px] h-[32px] cursor-pointer ml-[10%]" onClick={handleMenu}/>
      <a href="#">
        <img src={logo} alt="logo-image" />
      </a>
    </div>

    <hr className="w-[20vw] border-[#E7E5E4] border-[1px]" />

    <div>
      <h1 className="text-[28px] font-[800] font-['Raleway']">Cu siguranță, împreună!</h1>
    </div>

    <hr className="w-[20vw] border-[#E7E5E4] border-[1px]" />

    <div className="flex items-center gap-[15px] text-[14px] justify-between">
      <div className="cursor-pointer p-[20px] flex flex-col items-center justify-center hover:text-[#A40731] duration-[500ms]">
        <img src={loginIcon} alt="login-icon" className="w-[32px] h-[32px]" />
        <div className="font-face-pt-regular mt-[6px]">Logare</div>
      </div>
      <div className="cursor-pointer p-[15px] flex flex-col items-center justify-center hover:text-[#A40731] duration-[500ms]">
        <img src={registrationIcon} alt="registration-icon" className="w-[32px] h-[32px]" />
        <div className="font-face-pt-regular mt-[6px]">Înregistrare</div>
      </div>
    </div>

    {activeMenu && 
    <div className="absolute top-0 left-0 z-[100] h-[100vh] w-[100%] bg-white/10 backdrop-blur-[25px] opacity-100 transition-all duration-500">
      <div className="h-[100vh] bg-white w-[300px] menu-wrapper border-r-[2px] font-face-pt-bold flex flex-col">
        <div className="flex justify-between items-center p-[30px]">
          <div className="font-[800] text-[26px]">
            Menu
          </div>
          <div onClick={handleMenu} className="text-black cursor-pointer">
            &#10006;
          </div>
        </div>

        <nav className="">
            <ul className="text-[20px] flex flex-col gap-[20px] items-center">
              <li><a href="#" className="px-[80px] py-[10px] hover:bg-[#A40731] hover:text-white duration-300">Menu item #1</a></li>
              <li><a href="#" className="px-[80px] py-[10px] hover:bg-[#A40731] hover:text-white duration-300">Menu item #2</a></li>
              <li><a href="#" className="px-[80px] py-[10px] hover:bg-[#A40731] hover:text-white duration-300">Menu item #3</a></li>
              <li><a href="#" className="px-[80px] py-[10px] hover:bg-[#A40731] hover:text-white duration-300">Menu item #4</a></li>
            </ul>
        </nav>
      </div>
    </div>
    }

  </header>
  )
}

export default Header;
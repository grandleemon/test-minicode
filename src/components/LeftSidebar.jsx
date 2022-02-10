import { useState } from 'react'
import languageIcon from './../assets/language-icon.svg'
import phoneIcon from './../assets/phone-icon.svg'
import messengerIcon from './../assets/messenger-icon.svg'
import whatsAppIcon from './../assets/whatsapp-icon.svg'
import LeftSidebarItem from './LeftSidebarItem'

const LeftSidebar = () => {
    const [chooseLang, setChooseLang] = useState("Rom")

    const handleChangeLang = (lang) => {
        switch(lang){
            case "Rom": {
                setChooseLang("Rom")
                break
            }
            case "Рус": {
                setChooseLang("Рус")
                break
            }
        }
    }

  return (
    <div className="left-sidebar w-[99px] flex flex-col justify-between absolute items-center text-[14px] pt-[33px] font-face-pt-regular border-[#E7E5E4] border-r-[1px]">
        <div className="flex flex-col justify-center items-center mb-[20px]">
            <img src={languageIcon} alt="language-icon" />
            <div className="mt-[10px]">
                <span className={`border-[#E7E5E4] border-r-[1px] h-[21px] px-[5px] cursor-pointer hover:underline ${chooseLang == "Рус" ? "text-[#A40731]" : ""}`}
                onClick={() => handleChangeLang("Рус")}>Рус</span>
                <span className={`px-[5px] h-[21px] cursor-pointer hover:underline ${chooseLang == "Rom" ? "text-[#A40731]" : ""}`}
                onClick={() => handleChangeLang("Rom")}>Rom</span>
            </div>
        </div>

        <hr className="w-[1px] h-[224px] border-[1px] border-[#E7E5E4]" />
        <LeftSidebarItem icon={phoneIcon}>Sună</LeftSidebarItem>
        <hr className="w-[1px] h-[224px] border-[1px] border-[#E7E5E4]" />
        <LeftSidebarItem icon={messengerIcon}>Messenger</LeftSidebarItem>
        <hr className="w-[70px] border-[1px] border-[#E7E5E4]" />
        <LeftSidebarItem icon={whatsAppIcon}>WhatsApp</LeftSidebarItem>
        
    </div>
  )
}

export default LeftSidebar
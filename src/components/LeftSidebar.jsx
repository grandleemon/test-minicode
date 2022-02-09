import languageIcon from './../assets/language-icon.svg'
import phoneIcon from './../assets/phone-icon.svg'
import messengerIcon from './../assets/messenger-icon.svg'
import whatsAppIcon from './../assets/whatsapp-icon.svg'

const LeftSidebar = () => {
  return (
    <div className="left-sidebar w-[99px] flex flex-col justify-between absolute items-center text-[14px] pt-[33px] font-face-pt-regular border-[#E7E5E4] border-r-[1px]">
        <div className="flex flex-col justify-center items-center mb-[20px]">
            <img src={languageIcon} alt="language-icon" />
            <div className="mt-[10px]">
                <span className="border-[#E7E5E4] border-r-[1px] h-[21px] px-[5px] cursor-pointer hover:underline">Рус</span>
                <span className="px-[5px] h-[21px] cursor-pointer hover:underline">Eng</span>
            </div>
        </div>

        <hr className="w-[1px] h-[224px] border-[1px] border-[#E7E5E4]" />

        <div className="group flex flex-col justify-center items-center cursor-pointer p-[25px]">
            <img src={phoneIcon} alt="phone-icon" />
            <div className="mt-[10px]">
                <span className="group-hover:underline">Sună</span>
            </div>
        </div>

        <hr className="w-[1px] h-[224px] border-[1px] border-[#E7E5E4]" />

        <div className="group flex flex-col justify-center items-center cursor-pointer p-[25px]">
            <img src={messengerIcon} alt="messenger-icon" />
            <div className="mt-[10px]">
                <span className="group-hover:underline">Messenger</span>
            </div>
        </div>

        <hr className="w-[70px] border-[1px] border-[#E7E5E4]" />

        <div className="group flex flex-col justify-center items-center cursor-pointer p-[25px]">
            <img src={whatsAppIcon} alt="messenger-icon" />
            <div className="mt-[10px]">
                <span className="group-hover:underline">WhatsApp</span>
            </div>
        </div>

    </div>
  )
}

export default LeftSidebar
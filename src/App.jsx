import menuIcon from './assets/menu-icon.svg'
import logo from './assets/logo.png'
import loginIcon from './assets/login-icon.svg'
import registrationIcon from './assets/registration-icon.svg'
import './App.css';

function App() {
  return (
    <div>
      <header className="h-[100px] bg-white w-[100%] border-[#E7E5E4] border-b-[1px] flex items-center justify-between">

        <div className="flex items-center justify-around w-[334px]">
          <img src={menuIcon} alt="menu-icon" className="w-[32px] h-[32px] cursor-pointer"/>
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
          <div className="cursor-pointer p-[15px] flex flex-col items-center justify-center hover:text-[#A40731]">
            <img src={registrationIcon} alt="registration-icon" className="w-[32px] h-[32px]" />
            <div className="font-face-pt-regular mt-[6px]">Înregistrare</div>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
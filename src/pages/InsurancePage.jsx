import { useEffect, useState } from 'react'
import InsuranceType from '../components/InsuranceTypes'
import GeneralInfo from './../components/GeneralInfo'
import {getInsuranceTypes, getInfo} from './../api/index'

const InsurancePage = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [activeTitleTab, setActiveTitleTab] = useState('Carte verde');
    const [insuranceTypes, setInsuranceTypes] = useState([])
    const [mainInfo, setMainInfo] = useState([])
    
    const handleTab = (i, type) => {
        setActiveTab(i);
        setActiveTitleTab(type);
    }

    useEffect(() => {

        getInsuranceTypes()
        .then(({types}) => setInsuranceTypes(types));

        getInfo()
        .then(({main}) => setMainInfo(main))

    }, [])

  return (
    <div className="font-face-pt-regular">
        <div className="min-w-[1300px] min-h-[767px]">
            <div className="insurance h-[159px] width-[100%] rounded-[7px] p-[30px] shadow-[0_5px_15px_2px_rgba(0,0,0,0.05)">
                <h2 className="font-[800] font-['Raleway'] text-[28px] text-white">
                    Alege tipul de asigurare
                </h2>
                <div className="flex gap-x-[28px] mt-[18px] select-none">
                    {insuranceTypes.length !== 0 
                    ? insuranceTypes.map((type, i) => (
                        <InsuranceType key={i} type={type} handleTab={handleTab} activeTab={activeTab} i={i}/>
                    )) 
                    : "loading error"}
                    <span className="px-[20px] py-[9px] cursor-pointer text-white hover:underline text-[18px] font-[700] ">
                        Altele <span className="ml-[5px]">&rarr;</span>
                    </span>
                </div>
            </div>

            <h2 className="font-[800] font-['Raleway'] text-[28px] mt-[30px]">
                Alege tipul autovehiculului
            </h2>

            {mainInfo.length !== 0 
            ? mainInfo?.map((info, i) => {
                return (
                    <div className={`${activeTab === i 
                    ? "active-block" 
                    : "hidden-block"}`}>
                         <GeneralInfo key={i} activeTitle={activeTitleTab} cards={info.cards} accordion={info.accordion} progressBar={info.stepProgress}/>
                    </div>
                )
            }) 
            : "loading error"}
        </div>
    </div>
  )
}

export default InsurancePage;
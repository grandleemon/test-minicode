import { useState } from 'react'
import {AccordionItem} from '../components/Collapsible'
import car from './../assets/car.svg'

const InsurancePage = () => {

    const [activeIndex, setActiveIndex] = useState(0)
    const [activeTab, setActiveTab] = useState(0)

    const handleTab = (arg) => {
        setActiveTab(arg)
    }
    
    const typesOfInsurance = [
        'Carte verde',
        'RCA',
        'Casco',
        'Medicala',
        'Accidente',
        'Bunuri',
        'Locuințe (imobile)',
    ]

    const insuranceInfo = [
        {
            'info': 'Autoturism cu pînă la 9 locuri'
        },
        {
            'info': 'Autoturism cu pînă la 9 locuri'
        },
        {
            'info': 'Camion mai mult de 3,5 tone'
        },
        {
            'info': 'Microbus pînă la 20 locuri'
        },
        {
            'info': 'Autobuz peste 20 locuri'
        },
        {
            'info': 'Remorci, semiremorci'
        },
        {
            'info': 'Refrigeratoare, cisterne'
        },
        {
            'info': 'Tehnică specială'
        },
        {
            'info': 'Echipament suplimentar'
        },
    ]

    const collapseInfo = [
        {
            'title': 'Obiectul asigurării',
            'description': `Autovehicule înmatriculate în Republica Moldova, care aparţin persoanelor fizice şi juridice. 
            Echipamentul suplimentar, care nu intră în dotarea autovehiculului conform listei de dotări ale uzinei producătoare. 
            Conducătorul auto şi pasagerii, pentru cazuri de accidente care pot avea loc în timpul accidentelor rutiere.
            Autovehicule înmatriculate în Republica Moldova, care aparţin persoanelor fizice şi juridice.
            Echipamentul suplimentar, care nu intră în dotarea autovehiculului conform listei de dotări ale uzinei producătoare. 
            Conducătorul auto şi pasagerii, pentru cazuri de accidente care pot avea loc în timpul accidentelor rutiere.ulului conform listei de dotări ale uzinei producătoare. 
            Conducătorul auto şi pasagerii, pentru cazuri de accidente care pot avea loc în timpul accidentelor rutiere.
            Autovehicule înmatriculate în Republica Moldova, care aparţin persoanelor fizice şi juridice.
            Echipamentul suplimentar, care nu intră în dotarea autovehiculului conform listei de dotări ale uzinei producătoare. 
            Conducătorul auto şi pasagerii, pentru cazuri de accidente care pot avea loc în timpul accidentelor rutiere.`
        },
        {
            'title': 'Riscuri și obligațiuni',
            'description': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quo officia repellendus est eos adipisci ad at necessitatibus unde? Atque id accusamus dignissimos? Libero illo tempora fugit molestiae a impedit!'
        }
    ]

    let [currentActive, setCurrentActive] = useState(0) 

    const stepProgressBar = [
        {
            'value': 1
        },
        {
            'value': 2
        },
        {
            'value': 3
        }
    ]

    const nextStep = () => {
        if(currentActive > 2) return;
        setCurrentActive(currentActive + 1)
        console.log(currentActive)
    }

    const prevStep = () => {
        if(currentActive < 1) return;
        setCurrentActive(currentActive - 1)
        console.log(currentActive)
    }

  return (
    <div className="font-face-pt-regular">
        <div className="min-w-[1300px] min-h-[767px]">
            <div className="insurance h-[159px] width-[100%] rounded-[7px] p-[30px] shadow-[0_5px_15px_2px_rgba(0,0,0,0.05)">
                <h2 className="font-[800] font-['Raleway'] text-[28px] text-white">
                    Alege tipul de asigurare
                </h2>
                <div className="flex gap-x-[28px] mt-[18px]">
                    {typesOfInsurance.map((type, i) => (
                        <div onClick={() => handleTab(i)} key={i} className={`px-[30px] py-[9px] bg-white rounded-[7px] cursor-pointer border-[1px] border-[#E7E5E4] 
                        ${activeTab == i ? "active-tab" : ""}` }>
                            <span className={`text-[18px] ${activeTab == i ? "gradient-tab font-[800] font-['Raleway']" : ""}`} >{type}</span>
                        </div>
                    ))}
                    <span className="px-[20px] py-[9px] cursor-pointer text-white hover:underline text-[18px] font-[700] ">Altele <span className="ml-[5px]">&rarr;</span></span>
                </div>
            </div>
            <div className="mt-[30px]">
                <h2 className="font-[800] font-['Raleway'] text-[28px] ">
                    Alege tipul autovehiculului
                </h2>
                <div className="mt-[40px] grid grid-cols-2 gap-x-[20px]">
                    <div className="grid grid-cols-3 grid-rows-3 gap-[20px]">
                        {insuranceInfo?.map((card, i) => (
                            <div key={i} className="card w-[200px] min-h-[125px] px-[20px] py-[13px] bg-white rounded-[7px] flex flex-col items-center justify-center 
                            text-center shadow-[0_5px_15px_2px_rgba(0,0,0,0.05)] cursor-pointer">
                                <img src={car} alt="card-image" className="mt-[17px]" />
                                <span className="mt-[17px]">{card.info}</span>
                            </div>
                        ))}
                    </div>

                    <div className="w-[100%] select-none mt-[-20px]">
                        {collapseInfo.map((card, index) => {
                            const showDescription = index === activeIndex ? "collapse-content-active" : "";
                            const changeIcon = index === activeIndex ? "plus-active" : "";
                            return (
                            <AccordionItem 
                            title={card.title} 
                            second 
                            description={card.description} 
                            showDescription={showDescription} 
                            changeIcon={changeIcon}
                            setActiveIndex={() => setActiveIndex(index)} />)
                        })}
                    </div>
                </div>
                <div className="w-[50%] flex justify-between text-[18px] items-center mt-[45px]">
                    <button className={`px-[30px] py-[9px] bg-white border-[1px] border-[#A40731] font-[700] rounded-[7px] w-[145px] flex items-center justify-center disabled:opacity-50`}
                    onClick={prevStep} disabled={currentActive < 1 ? true : false}>
                        <span className="font-[400] mr-[12px]">&#8592;</span> 
                        Înapoi
                    </button>
                    <button className={`text-white px-[30px] py-[9px] bg-[#A40731] border-[1px] border-[#A40731] font-[700] rounded-[7px] w-[145px] flex items-center justify-center disabled:opacity-50`} disabled={currentActive > 2 ? true : false} onClick={nextStep}>
                        Înainte
                        <span className="font-[400] ml-[12px]">&#8594;</span> 
                    </button>
                </div>  
            </div>
            <div className="right-sidebar absolute right-0 top-[100px] border-l-[1px] w-[100px] flex flex-col justify-between items-center py-[40px] select-none">
                {<div className="w-[35px] h-[35px] border-[2px] border-[#00834B] rounded-full flex items-center justify-center">
                    <div className="w-[11px] h-[11px] rounded-full bg-[#00834B]"></div>
                </div>
                /*
                <hr className="h-[180px] border-[1px] border-[#00834B]"/>

                <div className="w-[35px] h-[35px] border-[2px] border-[#42403F] rounded-full flex items-center justify-center">
                    <span className="font-[700]">1</span>
                </div>

                <hr className="h-[180px] border-[1px] border-[#E7E5E4]"/>

                <div className="w-[35px] h-[35px] border-[2px] border-[#42403F] rounded-full flex items-center justify-center">
                    <span className="font-[700]">2</span>
                </div>

                <hr className="h-[180px] border-[1px] border-[#E7E5E4]"/>

                <div className="w-[35px] h-[35px] border-[2px] border-[#42403F] rounded-full flex items-center justify-center">
                    <span className="font-[700]">3</span>
                </div> */}

                {stepProgressBar.map((circle) => {
                    return (
                        <div className={`step-circle w-[35px] h-[35px] border-[2px] rounded-full flex items-center justify-center 
                        ${currentActive >= circle.value ? "completed-step border-[#00834B]" : ""} `}>
                            <span className="font-[700]">{ currentActive >= circle.value ? <span className="text-white">&#10003;</span> : circle.value}</span>
                        </div> 
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default InsurancePage
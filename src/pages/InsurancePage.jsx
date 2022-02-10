import { useState } from 'react'

import InsuranceType from '../components/InsuranceTypes'

import GeneralInfo from './../components/GeneralInfo'

const InsurancePage = () => {

    
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

    const insuranceCardsInfo = [
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

    const generalInsuranceInfo = [
        {
            cards: [
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
            ],
            accordion: [
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
            ],
            stepProgress: [
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
        }
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
                        <InsuranceType key={i} type={type} handleTab={handleTab} activeTab={activeTab} i={i} />
                    ))}
                    <span className="px-[20px] py-[9px] cursor-pointer text-white hover:underline text-[18px] font-[700] ">Altele <span className="ml-[5px]">&rarr;</span></span>
                </div>
            </div>
            <h2 className="font-[800] font-['Raleway'] text-[28px] mt-[30px]">
                Alege tipul autovehiculului
            </h2>
            <div>
            {generalInsuranceInfo.map((info) => {
                return <GeneralInfo cards={info.cards} accordion={info.accordion} progressBar={info.stepProgress}/>
            })}
            </div>
        </div>
    </div>
  )
}

export default InsurancePage
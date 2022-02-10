import { useState } from 'react'
import InsuranceType from '../components/InsuranceTypes'
import GeneralInfo from './../components/GeneralInfo'

const InsurancePage = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [activeTitleTab, setActiveTitleTab] = useState('Carte verde');
    
    const handleTab = (i, type) => {
        setActiveTab(i);
        setActiveTitleTab(type);
    }

    console.log(activeTitleTab)
    
    const typesOfInsurance = [
        'Carte verde',
        'RCA',
        'Casco',
        'Medicala',
        'Accidente',
        'Bunuri',
        'Locuințe (imobile)',
    ]

    const generalInsuranceInfo = [
        {
            cards: [
                {
                    'info': 'Autoturism cu pînă la 9 locuri'
                },
                {
                    'info': 'Camion pînă la 3,5 tone'
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
                    value: 0
                },
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
        },
        {
            cards: [
                {
                    'info': 'Echipament suplimentar'
                },
                {
                    'info': 'Tehnică specială'
                },
                {
                    'info': 'Refrigeratoare, cisterne'
                },
                {
                    'info': 'Autoturism cu pînă la 9 locuri'
                },
                {
                    'info': 'Remorci, semiremorci'
                },
                {
                    'info': 'Camion pînă la 3,5 tone'
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
            ],
            accordion: [
                {
                    'title': 'Obiectul asigurării',
                    'description': `Autovehicule înmatriculate în Republica Moldova, care aparţin persoanelor fizice şi juridice. 
                    Echipamentul suplimentar, care nu intră în dotarea autovehiculului conform listei de dotări ale uzinei producătoare. 
                    Conducătorul auto şi pasagerii, pentru cazuri de accidente care pot avea loc în timpul accidentelor rutiere.
                    Autovehicule înmatriculate în Republica Moldova, care aparţin persoanelor fizice şi juridice.
                    Echipamentul suplimentar, care nu intră în dotarea autovehiculului conform listei de dotări ale uzinei producătoare. 
                    Conducătorul auto şi pasagerii, pentru cazuri dei, pentru cazuri de accidente care pot avea loc în timpul accidentelor rutiere.
                    Autovehicule înmatriculate în Republica Moldova, care aparţin persoanelor fizice şi juridice.
                    Echipamentul suplimentar, care nu intră în dotarea autovehiculului conform listei de dotări ale uzinei producătoare. 
                    Conducătorul auto şi pasagerii, pentru cazuri dei, pentru cazuri de accidente care pot avea loc în timpul accidentelor rutiere.
                    Autovehicule înmatriculate în Republica Moldova, care aparţin persoanelor fizice şi juridice.
                    Echipamentul suplimentar, care nu intră în dotarea autovehiculului conform listei de dotări ale uzinei producătoare. 
                    Conducătorul auto şi pasagerii, pentru cazuri dei, pentru cazuri de accidente care pot avea loc în timpul accidentelor rutiere.
                    Autovehicule înmatriculate în Republica Moldova, care aparţin persoanelor fizice şi juridice.
                    Echipamentul suplimentar, care nu intră în dotarea autovehiculului conform listei de dotări ale uzinei producătoare. 
                    Conducătorul auto şi pasagerii, pentru cazuri de`  
                },
                {
                    'title': 'Riscuri și obligațiuni',
                    'description': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quo officia repellendus est eos adipisci ad at necessitatibus unde? Atque id accusamus dignissimos? Libero illo tempora fugit molestiae a impedit!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quo officia repellendus est eos adipisci ad at necessitatibus unde? Atque id accusamus dignissimos? Libero illo tempora fugit molestiae a impedit!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quo officia repellendus est eos adipisci ad at necessitatibus unde? Atque id accusamus dignissimos? Libero illo tempora fugit molestiae a impedit!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quo officia repellendus est eos adipisci ad at necessitatibus unde? Atque id accusamus dignissimos? Libero illo tempora fugit molestiae a impedit!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quo officia repellendus est eos adipisci ad at necessitatibus unde? Atque id accusamus dignissimos? Libero illo tempora fugit molestiae a impedit!'
                }
            ],
            stepProgress: [
                {
                    value: 0
                },
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
        },
        {
            cards: [
                {
                    'info': 'Echipament suplimentar'
                },
                {
                    'info': 'Refrigeratoare, cisterne'
                },
                {
                    'info': 'Autoturism cu pînă la 9 locuri'
                },
                {
                    'info': 'Tehnică specială'
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
                    'info': 'Camion pînă la 3,5 tone'
                },
            ],
            accordion: [
                {
                    'title': 'Obiectul asigurării',
                    'description': `Autovehicule înmatriculate în Republica Moldova, care aparţin persoanelor fizice şi juridice. 
                    Echipamentul suplimentar, care nu intră în dotarea autovehiculului conform listei de dotări ale uzinei producătoare. 
                    Conducătorul auto şi `  
                },
                {
                    'title': 'Riscuri și obligațiuni',
                    'description': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quo officia repellendus est eos adipisci ad at necessitatibus unde? Atque id accusamus dignissimos? Libero illo tempora fugit molestiae a impedit!Lorem ipsum dolor '
                }
            ],
            stepProgress: [
                {
                    value: 0
                },
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
        },
        {
            cards: [
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
                    'info': 'Echipament suplimentar'
                },
                {
                    'info': 'Camion pînă la 3,5 tone'
                },
                {
                    'info': 'Refrigeratoare, cisterne'
                },
                {
                    'info': 'Remorci, semiremorci'
                },
                {
                    'info': 'Autoturism cu pînă la 9 locuri'
                },
                {
                    'info': 'Tehnică specială'
                },
            ],
            accordion: [
                {
                    'title': 'Obiectul asigurării',
                    'description': `Autovehicule înmatriculate în Republica Moldova, care aparţin persoanelor fizice şi juridice. 
                    Echipamentul suplimentar, care nu intră în dotarea autovehiculului conform listei de dotări ale uzinei producătoare. 
                    Conducătorul auto şAutovehicule înmatriculate în Republica Moldova, care aparţin persoanelor fizice şi juridice. 
                    Echipamentul suplimentar, care nu intră în dotarea autovehiculului conform listei de dotări ale uzinei producătoare. 
                    Conducătorul auto şAutovehicule înmatriculate în Republica Moldova, care aparţin persoanelor fizice şi juridice. 
                    Echipamentul suplimentar, care nu intră în dotarea autovehiculului conform listei de dotări ale uzinei producătoare. 
                    Conducătorul auto şAutovehicule înmatriculate în Republica Moldova, care aparţin persoanelor fizice şi juridice. 
                    Echipamentul suplimentar, care nu intră în dotarea autovehiculului conform listei de dotări ale uzinei producătoare. 
                    Conducătorul auto şAutovehicule înmatriculate în Republica Moldova, care aparţin persoanelor fizice şi juridice. 
                    Echipamentul suplimentar, care nu intră în dotarea autovehiculului conform listei de dotări ale uzinei producătoare. 
                    Conducătorul auto ş `  
                },
                {
                    'title': 'Riscuri și obligațiuni',
                    'description': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quo officia repellendus est eos adipisci ad at necessitatibus unde? Atque id accusamus dignissimos? Libero illo tempora fugit molestiae a impedit!Lorem ipsum doloradipisicing elit. Iure quo officia repellendus est eos adipisci ad at necessitatibus unde? Atque id accusamus dignissimos? Libero illo tempora fugit molestiae a impedit!Lorem ipsum doloradipisicing elit. Iure quo officia repellendus est eos adipisci ad at necessitatibus unde? Atque id accusamus dignissimos? Libero illo tempora fugit molestiae a impedit!Lorem ipsum doloradipisicing elit. Iure quo officia repellendus est eos adipisci ad at necessitatibus unde? Atque id accusamus dignissimos? Libero illo tempora fugit molestiae a impedit!Lorem ipsum doloradipisicing elit. Iure quo officia repellendus est eos adipisci ad at necessitatibus unde? Atque id accusamus dignissimos? Libero illo tempora fugit molestiae a impedit!Lorem ipsum dolor '
                }
            ],
            stepProgress: [
                {
                    value: 0
                },
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
        },
        {
            cards: [
                {
                    'info': 'Echipament suplimentar'
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
                    'info': 'Autoturism cu pînă la 9 locuri'
                },
                {
                    'info': 'Tehnică specială'
                },
                {
                    'info': 'Camion pînă la 3,5 tone'
                },
                {
                    'info': 'Refrigeratoare, cisterne'
                },
            ],
            accordion: [
                {
                    'title': 'Obiectul asigurării',
                    'description': `Autovehicule înmatriculate în Republica Moldova, care aparţin persoanelor fizice şi juridice. 
                    Echipamentul suplimentar, care nu intră în dotarea autovehiculului conform listei de dotări ale uzinei producătoare. 
                    Conducătorul auto şisuplimentar, care nu intră în dotarea autovehiculului conform listei de dotări ale uzinei producătoare. 
                    Conducătorul auto şisuplimentar, care nu intră în dotarea autovehiculului conform listei de dotări ale uzinei producătoare. 
                    Conducătorul auto şisuplimentar, care nu intră în dotarea autovehiculului conform listei de dotări ale uzinei producătoare. 
                    Conducătorul auto şi `  
                },
                {
                    'title': 'Riscuri și obligațiuni',
                    'description': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quo officia repellendus est eos adipisci ad at necessitatibus unde? Atque id accusamus dignissimos? Libero illo tempora fugit molestiae a impedit!Lorem ipsum doloradipisicing elit. Iure quo officia repellendus est eos adipisci ad at necessitatibus unde? Atque id accusamus dignissimos? Libero illo tempora fugit molestiae a impedit!Lorem ipsum doloradipisicing elit. Iure quo officia repellendus est eos adipisci ad at necessitatibus unde? Atque id accusamus dignissimos? Libero illo tempora fugit molestiae a impedit!Lorem ipsum doloradipisicing elit. Iure quo officia repellendus est eos adipisci ad at necessitatibus unde? Atque id accusamus dignissimos? Libero illo tempora fugit molestiae a impedit!Lorem ipsum doloradipisicing elit. Iure quo officia repellendus est eos adipisci ad at necessitatibus unde? Atque id accusamus dignissimos? Libero illo tempora fugit molestiae a impedit!Lorem ipsum dolor '
                }
            ],
            stepProgress: [
                {
                    value: 0
                },
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
        },
        {
            cards: [
                {
                    'info': 'Autobuz peste 20 locuri'
                },
                {
                    'info': 'Remorci, semiremorci'
                },
                {
                    'info': 'Autoturism cu pînă la 9 locuri'
                },
                {
                    'info': 'Tehnică specială'
                },
                {
                    'info': 'Camion pînă la 3,5 tone'
                },
                {
                    'info': 'Refrigeratoare, cisterne'
                },
                {
                    'info': 'Echipament suplimentar'
                },
                {
                    'info': 'Camion mai mult de 3,5 tone'
                },
                {
                    'info': 'Microbus pînă la 20 locuri'
                },
            ],
            accordion: [
                {
                    'title': 'Obiectul asigurării',
                    'description': `Autovehicule înmatriculate în Republica Moldova, care aparţin persoanelor fizice şi juridice. 
                    Echipamentul suplimentar, care nu intră în dotarea autovehiculului conform listei de dotări ale uzinei producătoare.`  
                },
                {
                    'title': 'Riscuri și obligațiuni',
                    'description': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quo officia repellendus est eos adipisci ad at necessitatibus unde? Atque id accusamus dignissimos?'
                }
            ],
            stepProgress: [
                {
                    value: 0
                },
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
        },
        {
            cards: [
                {
                    'info': 'Refrigeratoare, cisterne'
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
                    'info': 'Echipament suplimentar'
                },
                {
                    'info': 'Camion mai mult de 3,5 tone'
                },
                {
                    'info': 'Camion pînă la 3,5 tone'
                },
                {
                    'info': 'Autoturism cu pînă la 9 locuri'
                },
                {
                    'info': 'Tehnică specială'
                },
            ],
            accordion: [
                {
                    'title': 'Obiectul asigurării',
                    'description': `Autovehicule înmatriculate în Republica Moldova, care aparţin persoanelor fizice şi juridice. 
                    Echipamentul suplimentar, care nu intră în dotarea autovehiculului conform listei de dotări ale uzinei producătoare.Autovehicule înmatriculate în Republica Moldova, care aparţin persoanelor fizice şi juridice. 
                    Echipamentul suplimentar, care nu intră în dotarea autovehiculului conform listei de dotări ale uzinei producătoare. Autovehicule înmatriculate în Republica Moldova, care aparţin persoanelor fizice şi juridice. 
                    Echipamentul suplimentar, care nu intră în dotarea autovehiculului conform listei de dotări ale uzinei producătoare. Autovehicule înmatriculate în Republica Moldova, care aparţin persoanelor fizice şi juridice. 
                    Echipamentul suplimentar, care nu intră în dotarea autovehiculului conform listei de dotări ale uzinei producătoare. Autovehicule înmatriculate în Republica Moldova, care aparţin persoanelor fizice şi juridice. 
                    Echipamentul suplimentar, care nu intră în dotarea autovehiculului conform listei de dotări ale uzinei producătoare. Autovehicule înmatriculate în Republica Moldova, care aparţin persoanelor fizice şi juridice. 
                    Echipamentul suplimentar, care nu intră în dotarea autovehiculului conform listei de dotări ale uzinei producătoare.  `  
                },
                {
                    'title': 'Riscuri și obligațiuni',
                    'description': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quo officia repellendus est eos adipisci ad at necessitatibus unde? Atque id accusamus dignissimos? Libero illo tempora fugit molestiae a impedit!Lorem ipsum doloradipisicing elit. Iure quo officia repellendus est eos adipisci ad at necessitatibus unde? Atque id accusamus dignissimos? Libero illo tempora fugit molestiae a impedit!Lorem ipsum doloradipisicing elit. Iure quo officia repellendus est eos adipisci ad at necessitatibus unde? Atque id accusamus dignissimos? Libero illo tempora fugit molestiae a impedit!Lorem ipsum doloradipisicing elit. Iure quo officia repellendus est eos adipisci ad at necessitatibus unde? Atque id accusamus dignissimos? Libero illo tempora fugit molestiae a impedit!Lorem ipsum doloradipisicing elit. Iure quo officia repellendus est eos adipisci ad at necessitatibus unde? Atque id accusamus dignissimos? Libero illo tempora fugit molestiae a impedit!Lorem ipsum dolor '
                }
            ],
            stepProgress: [
                {
                    value: 0
                },
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

  return (
    <div className="font-face-pt-regular">
        <div className="min-w-[1300px] min-h-[767px]">
            <div className="insurance h-[159px] width-[100%] rounded-[7px] p-[30px] shadow-[0_5px_15px_2px_rgba(0,0,0,0.05)">
                <h2 className="font-[800] font-['Raleway'] text-[28px] text-white">
                    Alege tipul de asigurare
                </h2>
                <div className="flex gap-x-[28px] mt-[18px] select-none">
                    {typesOfInsurance.map((type, i) => (
                        <InsuranceType key={i} type={type} handleTab={handleTab} activeTab={activeTab} i={i}/>
                    ))}
                    <span className="px-[20px] py-[9px] cursor-pointer text-white hover:underline text-[18px] font-[700] ">Altele <span className="ml-[5px]">&rarr;</span></span>
                </div>
            </div>
            <h2 className="font-[800] font-['Raleway'] text-[28px] mt-[30px]">
                Alege tipul autovehiculului
            </h2>
            {generalInsuranceInfo.map((info, i) => {
                return (
                    <div className={`${activeTab === i ? "active-block": "hidden-block"}`}>
                        <GeneralInfo key={i} activeTitle={activeTitleTab} cards={info.cards} accordion={info.accordion} progressBar={info.stepProgress}/>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default InsurancePage
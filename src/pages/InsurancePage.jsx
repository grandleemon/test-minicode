import car from './../assets/car.svg'

const InsurancePage = () => {

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
            'image': './../assets/car.svg',
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

  return (
    <div className="font-face-pt-regular">
        <div className="min-w-[1300px] min-h-[767px]">
            <div className="insurance h-[159px] width-[100%] rounded-[7px] p-[30px] shadow-[0_5px_15px_2px_rgba(0,0,0,0.05)">
                <h2 className="font-[800] font-['Raleway'] text-[28px] text-white">
                    Alege tipul de asigurare
                </h2>
                <div className="flex gap-x-[28px] mt-[18px]">
                    {typesOfInsurance.map((type, i) => (
                        <div key={i} className="px-[30px] py-[9px] bg-white rounded-[7px] cursor-pointer">
                            <span className="text-[18px]">{type}</span>
                        </div>
                    ))}
                    <span className="px-[20px] py-[9px] cursor-pointer text-white hover:underline text-[18px] font-[700]">Altele &rarr;</span>
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

                    <div className="w-[100%]">
                        <div className="plus w-[100%] bg-white rounded-[7px] px-[20px] py-[11px] cursor-pointer flex justify-between items-center">
                            <h3 className="font-[700] text-[#42403F] text-[18px]">Obiectul asigurarii</h3>
                            <div className="flex items-center w-[20px] h-[20px]">
                            </div>
                        </div>
                        <div className="plus w-[100%] bg-white rounded-[7px] px-[20px] py-[11px] cursor-pointer flex justify-between items-center mt-[20px]">
                            <h3 className="font-[700] text-[#42403F] text-[18px]">Riscuri și obligațiuni</h3>
                            <div className="flex items-center w-[20px] h-[20px]">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[50%] flex justify-between text-[18px] items-center mt-[45px]">
                    <button className="px-[30px] py-[9px] bg-white border-[1px] border-[#A40731] font-[700] rounded-[7px] w-[145px] flex items-center justify-center">
                        <span className="font-[400] mr-[12px]">&#8592;</span> 
                        Înapoi
                    </button>
                    <button className="text-white px-[30px] py-[9px] bg-[#A40731] border-[1px] border-[#A40731] font-[700] rounded-[7px] w-[145px] flex items-center justify-center">
                        Înainte
                        <span className="font-[400] ml-[12px]">&#8594;</span> 
                    </button>
                </div>  
            </div>
            <div className="right-sidebar absolute right-0 top-[100px] border-l-[1px] w-[100px] flex flex-col justify-between items-center py-[40px] select-none">

                <div className="w-[35px] h-[35px] border-[2px] border-[#00834B] rounded-full flex items-center justify-center">
                    <div className="w-[11px] h-[11px] rounded-full bg-[#00834B]"></div>
                </div>

                <hr className="h-[170px] border-[1px] border-[#00834B]"/>

                <div className="w-[35px] h-[35px] border-[2px] border-[#42403F] rounded-full flex items-center justify-center">
                    <span className="font-[700]">1</span>
                </div>

                <hr className="h-[170px] border-[1px] border-[#E7E5E4]"/>

                <div className="w-[35px] h-[35px] border-[2px] border-[#42403F] rounded-full flex items-center justify-center">
                    <span className="font-[700]">2</span>
                </div>

                <hr className="h-[170px] border-[1px] border-[#E7E5E4]"/>

                <div className="w-[35px] h-[35px] border-[2px] border-[#42403F] rounded-full flex items-center justify-center">
                    <span className="font-[700]">3</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InsurancePage
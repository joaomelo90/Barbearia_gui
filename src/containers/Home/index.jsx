import Barber from "../../assets/home.jpg"


function Home(){
    return(
        <nav className=" relative flex items-center justify-center -mt-32">

        <img 
        src={Barber}
        alt="barbearia"
        className=" w-11/12 h-screen opacity-25 "
                />

        <div className=" absolute inset-0 flex items-center justify-center">
            <p className=" text-marrom font-bold text-4xl flex-nowrap text-center">Faça sua presença ser notada. <br /> Faça seu corte conosco.</p>
        </div>

        
        <div className="absolute mt-60 flex items-center justify-center rounded-lg  bg-green-600 w-80 h-10" id="span-horario">
            <span className=" text-white font-medium"> TER á SAB - 10:00 as 18:00 DOM - 10:00 as 15:00 </span>
        </div>
        

    </nav>
    )
}

export default Home
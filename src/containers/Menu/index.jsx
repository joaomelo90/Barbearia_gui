
import {useState} from "react";

import { ImScissors } from "react-icons/im";
import Logo from "../../assets/logo3.png"

import { FaBarsStaggered } from "react-icons/fa6";
import { CgCloseR } from "react-icons/cg";

function Menu() {

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
      setMenuOpen(false)
    }

    return (
        <>
            <main>

                <li className=" hidden sm:flex items-center gap-32 text-zinc-200 mt-2 ">
                    <ul className=' gui font-berkshire font-bold flex items-center gap-2  '>
                        <img
                            src={Logo}
                            alt="logo"
                            className=" w-32 h-32 ml-12"
                        /> Gui Corts <ImScissors className=" ml-2" /></ul>
                    <ul className=" text-marromClaro" >Sobre</ul>
                    <ul className=" text-marromClaro" >Barbeiro</ul>
                    <ul className=" text-marromClaro" >Contatos</ul>
                    <ul className=" text-marromClaro" >Serviços</ul>
                </li>
            </main>




            <main className=" w-full flex sm:hidden  flex-col ">


                <div className="flex w-full">


                  

                    <img
                        src={Logo}
                        alt="logo"
                        className=" w-32 h-32"
                    />
                    

                    <div className="flex w-screen justify-end">

                    <button onClick={toggleMenu} className=" z-50 text-white text-3xl flex items-center  px-4 py-2">
                        <FaBarsStaggered />
                    </button>
                    </div>
                </div>


                <div className=" absolute w-screen h-screen flex justify-end">
                <div id="menu" className={` absolute z-50 w-36 flex-col items-center px-3 py-2 bg-white shadow-xl rounded-3xl ${menuOpen ? 'opacity-85 translate-y-0 flex' : 'opacity-0 -translate-y-full hidden'}`}>

                    <div className="flex ">

                <p className=" font-berkshire font-bold flex items-center white-space: nowrap"> Gui Corts <ImScissors className=" ml-2" /> </p>

                    <button onClick={closeMenu} className=" text-red-500 text-3xl text-bold"> <CgCloseR /> </button>
                    </div>

                    <nav className="flex items-center flex-col mt-8 gap-5 w-full">
                    
                        <a href="#"
                            className="flex items-center gap-2 text-gray-500 font-medium text-2xl hover:text-3xl hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-300">Sobre</a>

                        <a href="#"
                            className=" flex items-center gap-2 text-gray-500 font-medium text-2xl hover:text-3xl hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-300">Barbeiro</a>

                        <a href="#"
                            className=" flex items-center gap-2 text-gray-500 font-medium text-2xl hover:text-3xl hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-300 ">Contatos</a>

                        <a href="#"
                            className=" flex items-center gap-2 text-gray-500 font-medium text-2xl hover:text-3xl hover:text-black hover:bg-gray-100 p-3 rounded-lg duration-300 ">Serviços</a>


                    </nav>
                    </div>

                </div>
            </main>



        </>
    )
}

export default Menu
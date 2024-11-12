
import Cabelo from "../../assets/cabelo.png"
import Barba from "../../assets/barba.png"
import Ferramentas from "../../assets/ferramentas.png"
import Tesoura from "../../assets/tesoura.png"
import Sobrancelha from "../../assets/pincas.png"


function Section() {
    return (
        <main className=" relative h-screen flex-col" >

            <div className=" w-full relative  z-50 flex  justify-center">
                <p className=" text-white font-bold text-3xl mt-10 tracking-widest ">Serviços</p>

            </div>


            <section className="w-full px-3 lg:px-6 mt-10">

                     <div className="grid grid-cols-1 md:grid-cols-3  md:gap-y-7 gap-4 ">

                        <div className=" border-4 border-marromClaro  p-3 rounded-lg min-h-[300px] relative flex flex-col">

                            <div className="absolute w-full h-full inset-0 bg-neutral-300/20 blur-md rounded-lg">
                            </div>

                            <div className="w-full flex items-center justify-center">
                                <img
                                    src={Tesoura}
                                    alt="tesoura"
                                    className=" w-28 mt-3"
                                />
                            </div>

                            <div className="w-full flex flex-col items-center gap-1 my-3">
                                <h2 className=" text-marromClaro text-3xl ">Corte de Cabelo</h2>
                            </div>

                            <div className="w-full flex flex-col items-center gap-1 my-3">
                                <p className=" text-marromClaro text-sm text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, vero molestias voluptatem eius accusantium commodi vitae architecto sint sapiente atque reprehenderit mollitia repudiandae quaerat aperiam dolore deserunt rerum quis eos?</p>
                            </div>

                        </div>

                        <div className=" border-4 border-marromClaro  p-3 rounded-lg min-h-[300px] relative flex flex-col">

                            <div className="absolute w-full h-full inset-0 bg-neutral-300/20 blur-md rounded-lg">
                            </div>

                            <div className="w-full flex items-center justify-center">
                                <img
                                    src={Cabelo}
                                    alt="cabelo"
                                    className=" w-28 mt-3"
                                />
                            </div>

                            <div className="w-full flex flex-col items-center gap-1 my-3">
                                <h2 className=" text-marromClaro text-3xl ">Luses e Relachamento</h2>
                            </div>

                            <div className="w-full flex flex-col items-center gap-1 my-3">
                                <p className=" text-marromClaro text-sm text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, vero molestias voluptatem eius accusantium commodi vitae architecto sint sapiente atque reprehenderit mollitia repudiandae quaerat aperiam dolore deserunt rerum quis eos?</p>
                            </div>

                        </div>



                        <div className=" border-4 border-marromClaro  p-3 rounded-lg min-h-[300px] relative flex flex-col">

                            <div className="absolute w-full h-full inset-0 bg-neutral-300/20 blur-md rounded-lg">
                            </div>

                            <div className="w-full flex items-center justify-center">
                                <img
                                    src={Barba}
                                    alt="barba"
                                    className=" w-28 mt-3"
                                />
                            </div>

                            <div className="w-full flex flex-col items-center gap-1 my-3">
                                <h2 className=" text-marromClaro text-3xl ">Barba</h2>
                            </div>

                            <div className="w-full flex flex-col items-center gap-1 my-3">
                                <p className=" text-marromClaro text-sm text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, vero molestias voluptatem eius accusantium commodi vitae architecto sint sapiente atque reprehenderit mollitia repudiandae quaerat aperiam dolore deserunt rerum quis eos?</p>
                            </div>

                        </div>


                    </div>



                    <div className="grid grid-cols-1 md:grid-cols-2 md:w-8/12 gap-4 mt-4 md:mr-auto md:ml-auto">

                        <div className=" border-4 border-marromClaro  p-3 rounded-lg min-h-[300px] relative flex flex-col ">

                            <div className="absolute w-full h-full inset-0 bg-neutral-300/20 blur-md rounded-lg">
                            </div>

                            <div className="w-full flex items-center justify-center">
                                <img
                                    src={Sobrancelha}
                                    alt="ferramenta"
                                    className=" w-28 mt-3"
                                />
                            </div>

                            <div className="w-full flex flex-col items-center gap-1 my-3">
                                <h2 className=" text-marromClaro text-3xl ">Sobrancelhas</h2>
                            </div>

                            <div className="w-full flex flex-col items-center gap-1 my-3">
                                <p className=" text-marromClaro text-sm text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, vero molestias voluptatem eius accusantium commodi vitae architecto sint sapiente atque reprehenderit mollitia repudiandae quaerat aperiam dolore deserunt rerum quis eos?</p>
                            </div>

                        </div>


                        <div className=" border-4 border-marromClaro  p-3 rounded-lg min-h-[300px] relative flex flex-col">

                            <div className="absolute w-full h-full inset-0 bg-neutral-300/20 blur-md rounded-lg">
                            </div>

                            <div className="w-full flex items-center justify-center">
                                <img
                                    src={Ferramentas}
                                    alt="ferramenta"
                                    className=" w-28 mt-3"
                                />
                            </div>

                            <div className="w-full flex flex-col items-center gap-1 my-3">
                                <h2 className=" text-marromClaro text-3xl ">Diversos</h2>
                            </div>

                            <div className="w-full flex flex-col items-center gap-1 my-3">
                                <p className=" text-marromClaro text-sm text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, vero molestias voluptatem eius accusantium commodi vitae architecto sint sapiente atque reprehenderit mollitia repudiandae quaerat aperiam dolore deserunt rerum quis eos?</p>
                            </div>

                        </div>
                    </div>
                
            </section>

        </main>
    )
}

export default Section


{/*} 
    
    import ServiceOne from "../../components/ServiceOne"
import ServiceTwo from "../../components/ServiceTwo"
import ServiceThree from "../../components/ServiceThree"
    
    
    
    
    <>
            <section className=" w-full">

                <h1 className=" text-2xl sm:text-4xl font-bold text-white text-center mt-5 tracking-wide">Bem-vindo à Barbearia <span className="font-berkshire font-bold ">Gui Corts</span></h1><br />

                <p className=" text-white text-xl sm:text-2xl text-center w-96 sm:w-full">
                    Onde qualidade e atenção personalizada se encontram. Na Gui Corts, cada corte de cabelo e barba é uma obra de arte única, criada com paixão e habilidade. Minha missão é proporcionar a você não apenas um visual impecável, mas também uma experiência relaxante e memorável.
                </p>
            </section>

            <aside className="flex items-center justify-center" >

                <ServiceOne/>
                <div className="hidden sm:flex">
                <ServiceTwo/>
                <ServiceThree/>
                </div>

            </aside>

            <section className="w-full flex items-center justify-center">

                <p className="text-white text-xl sm:text-2xl text-center w-96 sm:w-full sm:-mt-10">
                    Além dos serviços de barbearia, também ofereço uma seleção de produtos premium para cuidados com a barba e cabelo, escolhidos a dedo para ajudá-lo a manter seu estilo.<br />
                    Estou ansioso para recebê-lo em minha barbearia e proporcionar uma experiência que atenda às suas expectativas e vá além.
                    Marque sua próxima visita comigo e descubra por que tantos homens confiam em mim para cuidar de sua aparência.          
                </p>
            </section>

        </>*/}

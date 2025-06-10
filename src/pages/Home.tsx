import Header from "../components/Layout/Header";
import Button from "../components/UI/Button";
import Text from "../components/UI/Text";

export default function Home() {

    function Hero() {
        return (
            <section className="flex items-center justify-between" id="sobre-mim">
                <div className="flex container justify-center lg:items-start items-center font-bold uppercase sm:h-200 h-75 flex-col">
                    <Text className="sm:text-4xl text-3xl" as="h2">Olá, me chamo Talisson!</Text>
                    <Text as="p" className="lg:w-2xl w-sm lg:text-base text-[0.875rem] lg:font-bold font-semibold lg:text-start text-center">
                        Sou um desenvolvedor apaixonado por criar aplicações front-end. Tenho 19 anos e estou atualmente cursando Análise e Desenvolvimento de Sistemas.
                    </Text>
                    <div>
                        <Button className="rounded shadow-sm lg:my-3 my-5">Conheça meu trabalho</Button>
                    </div>
                </div>

            </section>
        )
    }

    function ProjectSection() {
        return (
            <section id="projetos">
                <div className="flex items-center gap-10">
                    <hr className="text-white w-full" />
                    <div className="lg:w-2xl text-center flex justify-center">
                        <h2 className="text-white font-bold lg:text-3xl text-xl uppercase">Meus Projetos</h2>
                    </div>
                    <hr className="text-white w-full" />
                </div>


                <div>

                </div>
            </section>
        )
    }


    return (
        <>
            <div className="bg-gradient-to-r from-[#ff4b4e] to-[#ff894e] mx-auto container shadow-sm m-4 p-3 rounded-sm">
                <Header />
            </div>
            <div className="container mx-auto">
                <Hero />
                <ProjectSection />
            </div>
        </>
    )
}
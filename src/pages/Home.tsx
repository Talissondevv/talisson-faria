import Header from "../components/Layout/Header";
import Button from "../components/UI/Button";
import Text from "../components/UI/Text";

export default function Home() {

    function Hero() {
        return (
            <section className="flex items-center justify-between">
                <div className="flex container justify-center sm:items-start items-center font-bold uppercase sm:h-200 h-100 flex-col">
                    <Text className="sm:text-4xl text-3xl" as="h2">Olá, me chamo Talisson!</Text>
                    <Text as="p" className="sm:w-2xl w-sm sm:text-base text-[0.875rem] sm:font-bold font-semibold sm:text-start text-center">
                        Sou um desenvolvedor apaixonado por criar aplicações front-end. Tenho 19 anos e estou atualmente cursando Análise e Desenvolvimento de Sistemas.
                    </Text>
                    <div>
                        <Button className="rounded shadow-sm my-3">Conheça meu trabalho</Button>
                    </div>
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
            </div>
        </>
    )
}
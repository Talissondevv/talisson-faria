import Header from "../components/Layout/Header";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
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
                <div className="flex items-center gap-10 py-10">
                    <hr className="text-white w-full" />
                    <div className="lg:w-2xl text-center flex justify-center">
                        <h2 className="text-white font-bold lg:text-3xl text-xl uppercase">Meus Projetos</h2>
                    </div>
                    <hr className="text-white w-full" />
                </div>


                <div className="flex gap-5 md:flex-col sm:flex-col flex-col lg:flex-row items-center">
                    <Card title="TransiScale" imageUrl="https://i.imgur.com/jpX8NMH.jpeg">
                        Ferramenta que auxilia gestores na transição de escalas 6x1 para 4x3,
                        simulando impactos operacionais e sugerindo ajustes automáticos nos turnos.
                        O sistema considera carga horária, folgas obrigatórias e leis trabalhistas,
                        garantindo eficiência, bem-estar dos colaboradores e continuidade das operações.
                        Desenvolvida em um hackathon organizado pela Contcode Community
                    </Card>
                    <Card title="ADS Tech University" imageUrl="https://i.imgur.com/aItcAoA.png">
                        Desenvolvimento de uma landing page completa e responsiva para a "ADS Tech University",
                        uma faculdade fictícia com foco em Análise e Desenvolvimento de Sistemas.
                        Este projeto pessoal foi concebido para aplicar e demonstrar habilidades
                        em design de interface (UI), experiência do usuário (UX) e desenvolvimento
                        front-end utilizando HTML semântico e Tailwind CSS.
                    </Card>
                    <Card title="FlakPlay" imageUrl="https://i.imgur.com/V7zsPHU.png">
                        FlakPlay é uma plataforma fictícia de streaming de músicas desenvolvida com foco em liberdade,
                        simplicidade e acessibilidade. Idealizada como um projeto pessoal,
                        sua proposta é oferecer uma experiência de escuta sem anúncios,
                        mensalidades ou barreiras — onde a música é o centro de tudo.
                        Inspirada na ideia de que sons conectam pessoas e transformam momentos.
                    </Card>

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
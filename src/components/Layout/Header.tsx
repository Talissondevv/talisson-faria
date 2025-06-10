import { DiGithubAlt } from "react-icons/di";
import Text from "../UI/Text";

export default function Header() {
    return (
        <header>
            <nav className="flex items-center justify-between mx-5">
                <div className="flex items-center">
                    <DiGithubAlt className="text-4xl text-gray-100" />
                    <Text as="h1" className="text-sm sm:text-xl mx-3">Talisson Faria</Text>
                </div>
                <div>
                    <ul className="flex gap-3 text-white text-sm sm:text-lg items-center">
                        <li><a href="#sobre-mim">Sobre Mim</a></li>
                        <li><a href="#projetos">Projetos</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
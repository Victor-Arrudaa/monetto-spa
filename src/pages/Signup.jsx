import { Link } from "react-router-dom";
import logo from "../assets/monetto.svg";
import Button from "../components/Button";
import Input from "../components/input";
import { BiArrowBack } from "react-icons/bi";

export default function Signup() {
    return (
        <div className="flex flex-col items-center justify-around bg-yellow-300 rounded-xl p-8 w-[27rem] min-h-[30rem] relative">
            <Link to="/signin">
                <BiArrowBack className="text-zinc-800 absolute top-3 left-3 text-2xl" />
            </Link>
            <img src={logo} alt="monetto logo" className="w-44 " />
            <form className="flex flex-col items-center justify-center gap-4 w-full text-2xl">
                <Input type="name" placeholder="Nome Completo" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Senha" />
                <Input type="password" placeholder="Confirmar Senha" />
                <Button type="submit" text="Signup" />
            </form>
        </div>
    );
}

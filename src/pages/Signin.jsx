import { Link } from "react-router-dom";
import logo from "../assets/monetto.svg";
import Button from "../components/Button";
import Input from "../components/input";

export default function Signin() {
    return (
        <div
            className="flex flex-col items-center justify-around
            bg-yellow-300 rounded-xl p-8 w-[27rem] min-h-[30rem]"
        >
            <img src={logo} alt="monetto logo" className="w-44" />
            <form className="flex flex-col items-center justify-center gap-4 w-full text-2xl">
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Senha" />
                <Button type="submit" text="Signin" />
            </form>

            <p className="text-zinc-800 text-xl">
                Não possui uma conta?{" "}
                <Link to="/signup" className="text-sky-700 hover:underline">
                    Cadastre-se
                </Link>
            </p>
        </div>
    );
}

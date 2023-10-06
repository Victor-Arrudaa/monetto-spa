import { Link } from "react-router-dom";
import logo from "../assets/monetto.svg";
import Button from "../components/Button";
import Input from "../components/input";
import { useForm } from "react-hook-form";

export default function Signin() {
    const { register, handleSubmit } = useForm();

    function handleSubmitForm(data) {
        console.log(data);
    }

    return (
        <div
            className="flex flex-col items-center justify-around
            bg-yellow-300 rounded-xl p-8 w-[27rem] min-h-[30rem]"
        >
            <img src={logo} alt="monetto logo" className="w-44" />
            <form
                onSubmit={handleSubmit(handleSubmitForm)}
                className="flex flex-col items-center justify-center gap-4 w-full text-2xl"
            >
                <Input
                    type="email"
                    placeholder="Email"
                    register={register}
                    name="email"
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    register={register}
                    name="password"
                />
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

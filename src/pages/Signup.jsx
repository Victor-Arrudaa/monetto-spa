import { Link } from "react-router-dom";
import logo from "../assets/monetto.svg";
import Button from "../components/Button";
import Input from "../components/input";
import { BiArrowBack } from "react-icons/bi";
import { useForm } from "react-hook-form";

export default function Signup() {
    const { register, handleSubmit } = useForm();

    function handleSubmitForm(data) {
        console.log(data);
    }
    return (
        <div className="flex flex-col items-center justify-around bg-yellow-300 rounded-xl p-8 w-[27rem] min-h-[30rem] relative">
            <Link to="/signin">
                <BiArrowBack className="text-zinc-800 absolute top-3 left-3 text-2xl" />
            </Link>
            <img src={logo} alt="monetto logo" className="w-44 " />
            <form
                onSubmit={handleSubmit(handleSubmitForm)}
                className="flex flex-col items-center justify-center gap-4 w-full text-2xl"
            >
                <Input
                    type="name"
                    placeholder="Nome Completo"
                    register={register}
                    name="name"
                />
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
                <Input
                    type="password"
                    placeholder="Confirmar Senha"
                    register={register}
                    name="password"
                />
                <Button type="submit" text="Signup" />
            </form>
        </div>
    );
}

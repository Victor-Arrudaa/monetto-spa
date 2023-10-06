import { Link } from "react-router-dom";
import logo from "../assets/monetto.svg";
import Button from "../components/Button";
import Input from "../components/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorInput from "../components/ErrorInput";
import { signinSchema } from "../schemas/SigninSchema.js";
import { signin } from "../services/user";
import Cookies from "js-cookie";

export default function Signin() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(signinSchema) });

    async function handleSubmitForm(data) {
        try {
            const token = await signin(data);
            Cookies.set("token", token.data, { expires: 1 });
            console.log(Cookies.get("token"));
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div
            className="flex flex-col items-center justify-around
            bg-white rounded-xl p-8 min-w-[20rem] max-w-md min-h-[30rem]"
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
                {errors.email && <ErrorInput text={errors.email.message} />}
                <Input
                    type="password"
                    placeholder="Senha"
                    register={register}
                    name="password"
                />
                {errors.password && (
                    <ErrorInput text={errors.password.message} />
                )}

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

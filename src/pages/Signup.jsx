import { Link } from "react-router-dom";
import logo from "../assets/monetto.svg";
import Button from "../components/Button";
import Input from "../components/input";
import { BiArrowBack } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorInput from "../components/ErrorInput";
import { signupSchema } from "../schemas/SignupSchema.js";
import { signup } from "../services/user";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(signupSchema) });
    const navigate = useNavigate();

    async function handleSubmitForm(data) {
        try {
            await signup(data);
            navigate("/signin");
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="flex flex-col items-center justify-around bg-white rounded-xl p-8 min-w-[23.7rem] min-h-[30rem] relative">
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
                {errors.name && <ErrorInput text={errors.name.message} />}

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

                <Input
                    type="password"
                    placeholder="Confirmar Senha"
                    register={register}
                    name="confirmPassword"
                />
                {errors.confirmPassword && (
                    <ErrorInput text={errors.confirmPassword.message} />
                )}

                <Button type="submit" text="Signup" />
            </form>
        </div>
    );
}

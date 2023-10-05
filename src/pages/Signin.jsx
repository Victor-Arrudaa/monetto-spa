import logo from "../assets/monetto.svg";

export default function Signin() {
    return (
        <div
            className="flex flex-col items-center justify-around
            bg-yellow-300 rounded-xl p-8 w-[27rem] h-[30rem]"
        >
            <img src={logo} alt="monetto logo" className="mb-[-2rem]" />
            <form className="flex flex-col justify-center gap-6 w-full text-2xl">
                <input
                    type="email"
                    placeholder="Email"
                    className="rounded-md p-2 w-full border text-zinc-800"
                />
                <input
                    type="password"
                    placeholder="Senha"
                    className="rounded-md p-2 w-full border text-zinc-800"
                />
                <button
                    type="submit"
                    className="px-4 py-2 rounded-md w-full font-bold text-yellow-300 bg-zinc-800"
                >
                    SIGNIN
                </button>
            </form>

            <p className="text-zinc-800 text-2xl">
                Não possui uma conta? Cadastre-se
            </p>
        </div>
    );
}

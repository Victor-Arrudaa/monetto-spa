/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useNavigate } from "react-router-dom";
import { GoSignOut } from "react-icons/go";
import logo from "../assets/monetto.svg";
import Button from "../components/Button";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { userLogged } from "../services/user";
import { findAllTransaction } from "../services/transactions";

export default function Home() {
    const navigate = useNavigate();
    const [nameUser, setNameUser] = useState({});
    const [transaction, setTransaction] = useState([]);

    function validateToken() {
        const token = Cookies.get("token");
        if (!token) navigate("/signin");
    }

    async function getUserLogged() {
        try {
            const user = await userLogged();
            setNameUser(user.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function getAllTransactions() {
        try {
            const response = await findAllTransaction();
            setTransaction(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        validateToken();
        getUserLogged();
    }, []);

    return (
        <main className="flex flex-col items-center justify-center bg-yellow-300 sm:rounded-lg p-8 w-screen sm:max-w-[38rem] lg:min-w-[54rem] h-screen sm:h-[35rem] text-2xl">
            <header className="flex items-center justify-between w-full pb-4">
                <img className="w-32 sm:w-40 " src={logo} alt="monetto logo" />
                <div className="flex items-center gap-0 sm:gap-4 text-2xl">
                    <h1 className="text-lg  sm:text-xl">
                        Olá,{" "}
                        {nameUser.name === undefined
                            ? nameUser.name
                            : nameUser.name.split(" ")[0]}
                    </h1>
                    <Link to="/signin">
                        <GoSignOut />
                    </Link>
                </div>
            </header>
            <section className="bg-white p-4 w-full h-full rounded-lg flex items-center justify-center">
                {getAllTransactions.length ? (
                    <ul>
                        <li></li>
                    </ul>
                ) : (
                    <p>Não há Transações no momento!</p>
                )}
            </section>
            <footer className="w-full pt-2 flex gap-2 text-lg font-bold md:flex-row flex-col">
                <Button
                    type="button"
                    text="Entrada"
                    icon="plus"
                    transaction="input"
                />
                <Button
                    type="button"
                    text="Saída"
                    icon="minus"
                    transaction="output"
                />
            </footer>
        </main>
    );
}

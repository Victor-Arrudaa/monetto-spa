/* eslint-disable react-hooks/exhaustive-deps */
import { Await, Link, useNavigate } from "react-router-dom";
import { GoSignOut } from "react-icons/go";
import { RiDeleteBin7Line } from "react-icons/ri";
import logo from "../assets/monetto.svg";
import Button from "../components/Button";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { userLogged } from "../services/user";
import {
    deleteTransaction,
    findAllTransaction,
} from "../services/transactions";
import dayjs from "dayjs";
import ErrorInput from "../components/ErrorInput";

export default function Home() {
    const navigate = useNavigate();
    const [nameUser, setNameUser] = useState({});
    const [transactions, setTransactions] = useState([]);
    const [balance, setBalance] = useState(0);
    const [apiErrors, setApiErrors] = useState("");

    function validateToken() {
        const token = Cookies.get("token");
        if (!token) navigate("/signin");
    }

    async function getUserLogged() {
        try {
            const user = await userLogged();
            setNameUser(user.data);
        } catch (error) {
            setApiErrors(error.message);
        }
    }

    async function getAllTransactions() {
        try {
            const response = await findAllTransaction();
            setTransactions(response.data);
            calculateBalance(response.data);
        } catch (error) {
            setApiErrors(error.message);
        }
    }

    async function handleRemoveTransaction(transactionId) {
        try {
            const response = await deleteTransaction(transactionId);
            if (response.status === 204) {
                const updatedTransactions = transactions.filter(
                    (transaction) => transaction._id !== transactionId
                );
                setTransactions(updatedTransactions);
            } else {
                setApiErrors("Erro na deleção");
            }
        } catch (error) {
            setApiErrors(error.message);
        }
    }

    function calculateBalance(transactions) {
        let total = 0;
        transactions.forEach((transaction) => {
            transaction.type === "input"
                ? (total += Number(transaction.value))
                : (total -= Number(transaction.value));
        });

        setBalance(total);
    }

    useEffect(() => {
        validateToken();
        getUserLogged();
        getAllTransactions();
    }, []);

    return (
        <main className="flex flex-col items-center justify-center bg-yellow-300 sm:rounded-lg p-8 w-screen sm:max-w-[38rem] lg:min-w-[54rem] h-screen sm:h-[35rem] text-2xl">
            {apiErrors && <ErrorInput text={apiErrors} />}

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
                {transactions.length ? (
                    <ul className="w-full h-full flex flex-col justify-between">
                        <div className="h-[17rem] overflow-auto p-3">
                            {transactions.map((transaction, index) => (
                                <li
                                    key={index}
                                    className="flex justify-between items-start w-full"
                                >
                                    <span className="flex items-center gap-2">
                                        <span className="text-base text-zinc-500">
                                            {dayjs(
                                                transaction.created_at
                                            ).format("DD/MM")}
                                        </span>
                                        <button
                                            onClick={() =>
                                                handleRemoveTransaction(
                                                    transaction._id
                                                )
                                            }
                                            className="bg-white cursor-pointer
                                        ml-6 text-red-400 hover:text-red-600"
                                        >
                                            {<RiDeleteBin7Line />}
                                        </button>
                                        {transaction.description}
                                    </span>
                                    <span
                                        className={`
                                        ${
                                            transaction.type === "input"
                                                ? "text-green-500"
                                                : "text-red-500"
                                        }
                                    `}
                                    >
                                        R$ {transaction.value}
                                    </span>
                                </li>
                            ))}
                        </div>
                        <li className="flex items-start justify-between w-full px-3">
                            <span>Balanço geral:</span>
                            <span
                                className={`
                                ${
                                    balance > 0
                                        ? "text-green-500"
                                        : "text-red-500"
                                }
                            `}
                            >
                                R$ {balance}
                            </span>
                        </li>
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

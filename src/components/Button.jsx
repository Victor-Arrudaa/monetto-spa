/* eslint-disable react/prop-types */
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function Button({ children, text, type, icon, transaction }) {
    let IconComponent;
    const navigate = useNavigate();

    if (icon === "plus") IconComponent = BiPlusCircle;
    if (icon === "minus") IconComponent = BiMinusCircle;

    return (
        <button
            type={type}
            className="px-4 py-2 rounded-md w-full font-bold text-yellow-300 bg-zinc-800 ease-in duration-300 hover:bg-zinc-900 flex items-center justify-center gap-2"
            onClick={() =>
                transaction && navigate(`/transactions/${transaction}`)
            }
        >
            {children}
            {IconComponent && <IconComponent />} {text}
        </button>
    );
}

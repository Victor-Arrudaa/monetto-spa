/* eslint-disable react/prop-types */
export default function Button({ text, type }) {
    return (
        <button
            type={type}
            className="px-4 py-2 rounded-md w-full font-bold text-yellow-300 bg-zinc-800"
        >
            {text}
        </button>
    );
}

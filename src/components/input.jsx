/* eslint-disable react/prop-types */
export default function Input({ type, placeholder, register, name }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className="rounded-sm p-2 w-full border-b-2 border-b-zinc-300 text-zinc-800 outline-none"
            {...register(name)}
        />
    );
}

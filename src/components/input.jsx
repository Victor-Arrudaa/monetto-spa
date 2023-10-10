/* eslint-disable react/prop-types */
export default function Input({ type, placeholder, register, name, step }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            step={step}
            className="rounded-sm p-2 w-full border-b-2 border-b-zinc-300 text-zinc-800 outline-none"
            {...register(name)}
        />
    );
}

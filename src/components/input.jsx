/* eslint-disable react/prop-types */
export default function Input({ type, placeholder, register, name }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className="rounded-md p-2 w-full border text-zinc-800"
            {...register(name)}
        />
    );
}

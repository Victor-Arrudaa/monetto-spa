/* eslint-disable react/prop-types */
export default function ErrorInput({ text }) {
    return (
        <span className="text-red-600 bg-red-200 text-sm font-medium rounded p-2 w-full">
            {text}
        </span>
    );
}

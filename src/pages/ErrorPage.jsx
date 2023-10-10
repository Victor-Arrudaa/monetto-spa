import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div className="text-white flex flex-col justify-center items-center">
            <h1 className="text-9xl">{error.status}</h1>
            <span className="text-3xl">{error.statusText}</span>
            <span className="text-xl">{error.data}</span>
        </div>
    );
}

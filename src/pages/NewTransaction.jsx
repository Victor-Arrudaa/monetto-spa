import { useParams } from "react-router-dom";

export default function NewTransaction() {
    const { type } = useParams();

    return <h1 className="text-white text-xl">{type}</h1>;
}

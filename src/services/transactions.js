import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "http://localhost:3000";

export function findAllTransaction() {
    const response = axios.get(`${BASE_URL}/transactions`, {
        headers: { Authorization: `${Cookies.get("token")}` },
    });

    return response;
}

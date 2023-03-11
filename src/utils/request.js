import { getJwtToken } from "../apis/auth";
export async function request(
    url,
    { method = "GET", body, headers, auth = true } = {}
) {
    let result = "";
    try {
        const res = await fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json",
                ...(auth && { Authoriization: `Bearer: ${getJwtToken()}` }),
                ...headers,
            },
            ...(body && { body: JSON.stringify(body) }),
        });
        result = await res.json();
    } catch (e) {
        console.log(e);
    }
    return result;
}
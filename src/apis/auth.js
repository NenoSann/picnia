import { request } from "../utils/request.js";

export function getJwtToken() {
    return localStorage.getItem("jwtToken");
}
/**
 * @NenoSann
 * @param jwt
 * 
 */
export function setJwtToken(jwt) {
    localStorage.setItem("jwtToken", jwt);
}

export function saveUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
}

export function getUser() {
    let res;
    try {
        res = localStorage.getItem("user");
    } catch (e) {
        console.log(e);
    }
    if (res !== "undefined") {
        res = JSON.parse(res);
    }
    return res;
}

export async function register(email, username, password) {
    const result = await request("/api/auth/local/register", {
        method: "POST",
        auth: false,
        body: {
            email,
            username,
            password,
            name: username,
        }
    });
    setJwtToken(result.jwt);
    saveUser(result.user);
    return result.user;
}
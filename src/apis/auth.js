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

export function getUser() {
    return JSON.stringify(localStorage.getItem("user"));
}

export function saveUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
}
export async function userRegister(email, username, password) {
    const result = await request("/api/auth/local/register", {
        method: "POST",
        auth: false,
        body: {
            email,
            username,
            password,
            name: username,
        },
    });
    setJwtToken(result.jwt);
    saveUser(result.user);
    return result.user;
}



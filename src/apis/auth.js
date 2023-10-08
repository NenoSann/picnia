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

/**
 * @description 将传入的email,username和password上传到服务器进行验证和保存，返回用户信息并设置jwtToken
 * @param {String} email 
 * @param {String} username 
 * @param {String} password 
 * @returns 
 */
export async function register(email, username, password) {
    const result = await request("/api/create/User", {
        method: "POST",
        auth: false,
        body: JSON.stringify({
            email,
            userName: username,
            password,
        })
    });
    setJwtToken(result.token);
    saveUser(result.user);
    return { user: result.user, message: result.message };
}
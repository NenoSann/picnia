import { fetchRequest } from "./HTTPRequest";

export async function randomPullPost(requestUserName) {
    try {
        const response = await fetchRequest('/api/get/post', 'POST', { 'Content-Type': 'application/json' }, JSON.stringify({ requestUserName: requestUserName }));
        if (response.ok) {
            const data = await response.json();
            return data.post;
        } else {
            console.error('Fetch request failed with status:', response.status);
            // 在请求失败时执行的代码
        }
    } catch (error) {
        console.error('Fetch request failed:', error);
        throw error;
        // 在请求失败时执行的代码
    }
}

export async function pullUserPost(body) {
    const response = await fetchRequest('/api/get/post/user', "POST", {
        "Content-Type": "application/json"
    }, JSON.stringify(body));
    const data = await response.json();
    return data;
}

export default { randomPullPost, pullUserPost }
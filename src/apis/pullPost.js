import { fetchRequest } from "./HTTPRequest";

export async function randomPullPost() {
    try {
        const response = await fetchRequest('/api/get/post', 'GET');
        if (response.ok) {
            const data = await response.json();
            console.log('fetch request successful')
            return data.post;
        } else {
            console.error('Fetch request failed with status:', response.status);
            // 在请求失败时执行的代码
        }
    } catch (error) {
        console.error('Fetch request failed:', error);
        // 在请求失败时执行的代码
    }
}

export default { randomPullPost }
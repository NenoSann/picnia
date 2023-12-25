import { fetchRequest } from './HTTPRequest';
/**
 * @description change current user's username.
 * @param {string} userId
 * @param {string} newUsername
 */
export async function changeUsername(userId, newUsername) {
    return new Promise((resolve, reject) => {
        fetchRequest('/api/update/changeUsername', "POST", {
            "Content-Type": "application/json"
        }, { userId, username: newUsername }).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        })
    })
}

export default { changeUsername }
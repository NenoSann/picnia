import { fetchRequest } from "./HTTPRequest";
const profileBase = '/api/profile/';
/**
 * @description fetch the profile page's data with the userName
 * @param {string} userName 
 * @returns {Promise}
 */
export async function getProfileData(userName) {
    return new Promise(async (resolve, reject) => {
        if (!fetchRequest) {
            throw new Error('userName is not provided.');
        }
        try {
            const response = await fetchRequest(
                profileBase + userName,
                "GET",
                {}
            )
            const profileData = await response.json();
            resolve(profileData);
        } catch (err) {
            reject();
            throw err;
        }
    })
}
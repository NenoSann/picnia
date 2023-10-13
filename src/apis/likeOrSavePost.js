import { fetchRequest } from "./HTTPRequest";

/**
 * @NenoSann
 * @param {'like'|'post'} type 
 * @param {{
 *  target:String,
 *  userName:String,
 *  postId:String
 * }} data
 * @returns {Promise}
 */
export async function likeOrSavePost(data) {
    console.log(data)
    console.log(JSON.stringify(data))
    try {
        const response = await fetchRequest('api/update/saveOrLikePost', 'POST', {
            'Content-Type': 'application/json'
        }, JSON.stringify(data));
    } catch (error) {
        console.log(error)
    }
}
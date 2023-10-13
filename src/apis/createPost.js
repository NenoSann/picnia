import { makeMultipartRequest } from './HTTPRequest'

/**
 * @NenoSann
 * @description 将代表Post的对象发送到服务器并储存至数据库
 * @param {Object} data 
 * @returns {Promise}
 */
export async function createPost(data) {
    return new Promise((resolve, reject) => {
        makeMultipartRequest('/api/create/Post', 'POST', data)
            .then((response => response.json()))
            .then(data => resolve(data))
            .catch(error => reject(error));
    })
}

export default createPost;
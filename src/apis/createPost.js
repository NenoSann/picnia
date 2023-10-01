import { makeMultipartRequest } from './HTTPRequest'

/**
 * @NenoSann
 * @description 将代表Post的对象发送到服务器并储存至数据库
 * @param {Object} data 
 */
export function createPost(data) {
    makeMultipartRequest('/api/create/Post', 'POST', data);
}

export default createPost;
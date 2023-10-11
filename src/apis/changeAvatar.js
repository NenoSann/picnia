import { makeMultipartRequest } from './HTTPRequest';

/**
 * @description 上传用户的新头像
 * @param {*} data 用户的email等 
 * @param {*} avatar 头像信息
 */
export async function changeAvatar(data, avatar) {
    makeMultipartRequest('/api/edit/avatar', 'POST', { json: data, image: avatar });
}
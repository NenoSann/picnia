/**
 * @description: 封装的HTTPRequest方法，接受URL和请求类型，进行http请求
 * @param {URL | string} url
 * @param {String} method
 * @param {Object} body
 * @returns {void}
 */
export function makeRequest(url, method, body) {
    const request = new XMLHttpRequest();
    request.open(method, url);
    request.setRequestHeader('content-type', 'application/json');
    request.send(body);
}

export default makeRequest;
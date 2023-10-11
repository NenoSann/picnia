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

/**
 * @NenoSann
 * @description 传输multipart的元素到后台。
 * @param {URL | string} url
 * @param {String} method
 * @param {Object} body
 * @returns {Promise}
 */
export function makeMultipartRequest(url, method, body) {
    return new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append('json', new Blob([body.json], { type: 'application/json' }), 'json');
        formData.append('image', body.image, 'image');
        fetch(url, {
            method: method,
            headers: {},
            body: formData,
        })
            .then(() => {
                console.log('成功传输post');
                resolve();
            })
            .catch((error) => {
                console.log('传输post失败', error);
                reject(error);
            });
    });
}

/**
 * @NenoSann
 * @description send http request using fetch, return a promise
 * @param {URL | String} url 
 * @param {'POST' | 'GET'} method 
 * @param {*} body 
 * @returns  {Promise}
 */
export function fetchRequest(url, method, body) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method,
            body,
        }).then((response) => {
            console.log('success fetch')
            resolve(response);
        }).catch((error) => {
            console.log('fail fetch', error);
            reject(error);
        })
    })
}

export default { makeRequest, makeMultipartRequest, fetchRequest };
const HTTP_TMEOUT = 5000;

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
        fetchRequest(url, method, {}, formData)
            .then((response) => {
                console.log('成功传输post');
                resolve(response);
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
export function fetchRequest(url, method, headers, body) {
    return new Promise((resolve, reject) => {
        const controler = new AbortController();
        const timeout = setTimeout(controler.abort, HTTP_TMEOUT);
        const jwtToken = localStorage.getItem('jwtToken');

        // append jwt Token into header
        if (!headers['Authorization']) {
            headers['Authorization'] = `Bearer ${jwtToken}`;
        }
        console.log('debug: headers, ', headers);
        fetch(url, {
            method,
            headers: headers || undefined,
            body,
            signal: controler.signal,
        }).then((response) => {
            clearTimeout(timeout);
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }
            console.log('success fetch')
            resolve(response);
        }).catch((error) => {
            clearTimeout(timeout);
            console.log('fail fetch', error);
            reject(error);
        })
    })
}

export default { makeRequest, makeMultipartRequest, fetchRequest };
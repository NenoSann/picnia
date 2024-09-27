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
 * @param {{
 *      start: Function,
 *      end: Function,
 * }} callbacks
 * @returns  {Promise}
 */
export function fetchRequest(url, method, headers, body, callbacks) {
  url = getProductionURL(url);
  return new Promise((resolve, reject) => {
    const controler = new AbortController();
    const timeout = setTimeout(controler.abort, HTTP_TMEOUT);
    const jwtToken = localStorage.getItem('jwtToken');
    // append jwt Token into header
    if (!headers['Authorization']) {
      headers['Authorization'] = `Bearer ${jwtToken}`;
    }

    // start callbacks (if exist)
    if (callbacks?.start) {
      callbacks.start();
    }

    fetch(url, {
      method,
      headers: headers || undefined,
      body,
      signal: controler.signal
    })
      .then((response) => {
        clearTimeout(timeout);
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        resolve(response);
      })
      .catch((error) => {
        clearTimeout(timeout);
        console.log('fail fetch', error);
        reject(error);
      })
      .finally(() => {
        if (callbacks?.end) {
          callbacks.end();
        }
      });
  });
}

/**
 * @description set the request url depends on mode, in development mode return localURL
 *              to make vite proxy works, and return server ip in production mode.
 * @param {string | URL} localURL
 * @returns {String}
 */
function getProductionURL(localURL) {
  if (typeof localURL === 'string') {
    if (import.meta.env.PROD) {
      if (localURL.startsWith('/api')) {
        return `https://nenosannn.icu:3000${localURL.slice(4)}`;
      }
    } else {
      return localURL;
    }
  } else if (Object.getPrototypeOf(localURL) === URL.prototype) {
    console.log(localURL);
  }
}

export default { makeRequest, makeMultipartRequest, fetchRequest };

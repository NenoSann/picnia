/**
 * @description validate email using regex
 * @param {String} email
 * @return {Boolean} true or false
 */
export function emailValidate(email) {
  const reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return reg.test(email);
}

/**
 * @description validate jwtToken, using base64 to decode jwtToken
 * @link https://stackoverflow.com/questions/38552003/how-to-decode-jwt-token-in-javascript-without-using-a-library
 * @param {*} jwtToken
 * @returns {Boolean}
 */
export function jwtTokenValidate(jwtToken) {
  if (!jwtToken) {
    return false;
  }
  var base64Url = jwtToken.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );
  const payload = JSON.parse(jsonPayload);
  // jwt token expire
  // payload.exp is in seconds, so multiply by 1000 to compare with Date.now();
  if (Date.now() >= payload.exp * 1000) {
    return false;
  }
  return true;
}

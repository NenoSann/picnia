
/**
 * @description validate email using regex
 * @param {String} email 
 * @return {Boolean} true or false
 */
export function emailValidate(email) {
    const reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return reg.test(email);
}
module.exports = { emailValidate }
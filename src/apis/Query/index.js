import { fetchRequest } from '../HTTPRequest';

/**
 * validate the user input before register
 * return status and reasons for preRegiste
 * @param {string} name
 * @param {string} email
 */
export async function preRegiste(name, email) {
  if (name && email) {
    const url = new URL('/api/query/preRegiste');
    url.searchParams.append('userName', name);
    url.searchParams.append('userEmail', email);
    return fetchRequest(url, 'POST', {});
  }
}

/**
 *
 * @param {'username' | 'email'} type
 * @param {Promise} value
 */
export async function checkValidity(type, value) {
  if (type && value) {
    const url = `/api/query/checkValidity?type=${type}&value=${value}`;
    // url.searchParams.append('type', type);
    // url.searchParams.append('value', value);
    const response = await fetchRequest(url, 'POST', {}, {});
    const result = response.json();
    console.log('check validity debug', result);
    return result;
  }
}

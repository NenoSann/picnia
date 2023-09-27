import { makeRequest } from './HTTPRequest'

export function sendUserData(data) {
    makeRequest('/api', 'POST', data);
}

export default sendUserData;
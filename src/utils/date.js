import { formatDistanceToNowStrict, parseISO } from "date-fns";
import { zhCN } from 'date-fns/locale'
/**
 * @description cast ISO8061 timestamp to human readble timeformat,  
 *              take in timestamp like: 2023-12-22T18:39:44.898Z,  
 *              return something: 1天前，2小时前
 * @param {String} timestamp 
 * @returns {String}
 */
export function formatTimestamp(timestamp) {
    const date = parseISO(timestamp);
    const distance = formatDistanceToNowStrict(date, { locale: zhCN, addSuffix: true });
    return distance;
}

export default { formatTimestamp };
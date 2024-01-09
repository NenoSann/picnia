import { formatDistanceToNowStrict, parseISO, differenceInDays, format } from "date-fns";
import { zhCN } from 'date-fns/locale'
/**
 * @description cast ISO8061 timestamp to human readble timeformat,  
 *              take in timestamp like: 2023-12-22T18:39:44.898Z,  
 *              return something: 1天前，2小时前
 * @param {String} timestamp 
 * @returns {String}
 */
export function formatTimestamp(timestamp) {
    const dateNow = new Date;
    const date = parseISO(timestamp);
    const distance = formatDistanceToNowStrict(date, { locale: zhCN, addSuffix: true });
    const distanceInDays = differenceInDays(dateNow, date);
    if (distanceInDays >= 3) {
        return formatDate(date);
    }
    return distance;
}
export function formatDate(timestamp) {
    const date = new Date(timestamp);
    const formattedDate = format(date, "yyyy年M月d日HH时mm分", { locale: zhCN });
    return formattedDate;
}
export default { formatTimestamp, formatDate };
import { fetchRequest } from './HTTPRequest';

/**
 * @NenoSann
 * @description take in commentBody and using fetch send to server
 * the commentBody is stringified.
 * @param {Object} commentBody
 */
export async function createComment(commentBody) {
  try {
    const result = await fetchRequest(
      '/api/create/comment',
      'POST',
      {
        'Content-Type': 'application/json'
      },
      JSON.stringify(commentBody)
    );
    return result;
  } catch (error) {
    console.log('error on sending comment. ', error);
  }
}

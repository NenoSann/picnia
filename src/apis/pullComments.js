import { fetchRequest } from './HTTPRequest';

export async function pullComments(postId) {
  try {
    const response = await fetchRequest(
      '/api/get/comment',
      'POST',
      {
        'Content-Type': 'application/json'
      },
      JSON.stringify({
        postId: postId
      })
    );
    if (response.ok) {
      const comments = await response.json();
      return comments;
    }
  } catch (error) {
    console.log('pull comments error : ', error);
  }
}

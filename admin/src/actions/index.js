import fetch from 'cross-fetch';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const requestPost = requestType => ({
  type: REQUEST_POSTS,
  requestType: requestType
});

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const receivePosts = (requestType, posts) => ({
  type: RECEIVE_POSTS,
  requestType: requestType,
  posts: posts
});

export function fetchPosts(postParam) {
  return function(dispatch) {
    dispatch(requestPost(postParam.requestType));
    return fetch(postParam.url)
      .then(response => json(response))
      .then(posts => {
        console.log(posts);
        if (posts.success) {
          dispatch(receivePosts(postParam.requestType, posts));
        }
      });
  };
}

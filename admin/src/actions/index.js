import fetch from 'cross-fetch';

export const ADMIN_LOGIN = 'ADMIN_LOGIN';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_TAGS = 'FETCH_TAGS';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const ADD_POST = 'ADD_POSTS';
export const EDIT_POST = 'EDIT_POSTS';
export const DRAFT_POST = 'DRAFT_POSTS';
export const LOGIN_CHECK = 'LOGIN_CHECK';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE';

export const requestPost = requestType => ({
  type: REQUEST_POSTS,
  requestType: requestType
});

export const receivePosts = (requestType, posts) => ({
  type: requestType,
  actionType: RECEIVE_POSTS,
  posts: posts
});

export function fetchPosts(postParam) {
  return function(dispatch) {
    let Init = {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      body: postParam.data ? JSON.stringify(postParam.data) : JSON.stringify({})
    };
    dispatch(requestPost(postParam.requestType));
    return fetch(postParam.url, Init)
      .then(response => response.json())
      .then(posts => {
        //console.log(posts);
        if (posts.success) {
          dispatch(receivePosts(postParam.requestType, posts));
        }
      });
  };
}

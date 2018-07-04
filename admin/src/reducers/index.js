import { combineReducers } from 'redux';
import * as ActionTypes from '../actions';

const loginState = (state = { loginState: false }, action) => {
  switch (action.type) {
    case ActionTypes.ADMIN_LOGIN:
      return {
        ...state,
        loginState: true
      };
      break;
    default:
      return state;
  }
};

const user = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.ADMIN_LOGIN:
      let posts = ActionTypes.receivePosts().posts;
      return {
        ...state,
        posts
      };
      break;
    default:
      return state;
  }
};

const postList = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      let postList = ActionTypes.receivePosts().posts.map(post =>
        Object.keys(post)
      );
      return {
        ...state,
        postList
      };
      break;
    default:
      return state;
  }
};
const posts = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      let posts = ActionTypes.receivePosts().posts;
      return {
        ...state,
        posts
      };
      break;
    default:
      return state;
  }
};

const comments = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_COMMENTS:
      let comments = ActionTypes.receivePosts().posts;
      return {
        ...state,
        comments
      };
      break;
    default:
      return state;
  }
};
const tags = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_TAGS:
      let tags = ActionTypes.receivePosts().posts;
      return {
        ...state,
        tags
      };
      break;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  loginState,
  user,
  postList,
  posts,
  comments,
  tags
});

export default rootReducer;

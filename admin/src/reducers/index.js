import { combineReducers } from 'redux';
import * as ActionTypes from '../actions';

const loginState = (state = { loginState: false }, action) => {
  switch (action.type) {
    case ActionTypes.RECEIVE_POSTS:
      if (ActionTypes.requestPost().requestType === 'login') {
        return {
          ...state,
          loginState: true
        };
      }
      break;
    default:
      return state;
  }
};

const user = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.RECEIVE_POSTS:
      if (ActionTypes.requestPost().requestType === 'login') {
        let posts = ActionTypes.requestPost().posts;
        return {
          ...state,
          posts
        };
      }
      break;
    default:
      return state;
  }
};

const postList = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.RECEIVE_POSTS:
      if (ActionTypes.requestPost().requestType === 'post') {
        let postList = ActionTypes.requestPost().posts.map(post =>
          Object.keys(post)
        );
        return {
          ...state,
          postList
        };
      }
      break;
    default:
      return state;
  }
};
const posts = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.RECEIVE_POSTS:
      if (ActionTypes.requestPost().requestType === 'post') {
        let posts = ActionTypes.requestPost().posts;
        return {
          ...state,
          posts
        };
      }
      break;
    default:
      return state;
  }
};

const comments = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.RECEIVE_POSTS:
      if (ActionTypes.requestPost().requestType === 'comments') {
        let comments = ActionTypes.requestPost().posts;
        return {
          ...state,
          comments
        };
      }
      break;
    default:
      return state;
  }
};
const tags = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.RECEIVE_POSTS:
      if (ActionTypes.requestPost().requestType === 'comments') {
        let tags = ActionTypes.requestPost().posts;
        return {
          ...state,
          tags
        };
      }
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

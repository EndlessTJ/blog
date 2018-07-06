import { combineReducers } from 'redux';
import * as ActionTypes from '../actions';

const requestState = (state = { state: false }, action) => {
  if (action.type === ActionTypes.REQUEST_POSTS) {
    return {
      ...state,
      state: true
    };
  } else if (action.actionType === ActionTypes.RECEIVE_POSTS) {
    return {
      ...state,
      state: false
    };
  } else {
    return state;
  }
};

const loginState = (state = { loginState: false }, action) => {
  switch (action.type) {
    case ActionTypes.ADMIN_LOGIN:
      return {
        ...state,
        loginState: true
      };
      break;
    case ActionTypes.LOGIN_CHECK:
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
      let users = action.posts.data.user;
      return {
        ...state,
        users
      };
      break;
    case ActionTypes.LOGIN_CHECK:
      users = action.posts.data.user;
      return {
        ...state,
        users
      };
    default:
      return state;
  }
};

const postList = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      let postList = action.posts.data.post.map(post => post._id);
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
      let posts = action.posts.data.post;
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
      let comments = action.posts;
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
      let tags = action.posts;
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
  requestState,
  loginState,
  user,
  postList,
  posts,
  comments,
  tags
});

export default rootReducer;

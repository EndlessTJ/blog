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
const requestMainState = (state = { state: false }, action) => {
  if (action.type === ActionTypes.REQUEST_POSTS && action.section === 'main') {
    return {
      ...state,
      state: true
    };
  } else if (
    action.actionType === ActionTypes.RECEIVE_POSTS &&
    action.section === 'main'
  ) {
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
    case ActionTypes.LOGIN_CHECK:
      return {
        ...state,
        loginState: true
      };
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
    default:
      return state;
  }
};
const addPostState = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_POST:
      let addPostState = action.posts.data.post;
      return {
        ...state,
        addPostState
      };
    default:
      return state;
  }
};

const editPostState = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.EDIT_POST:
      let editPostState = action.posts.data.post;
      return {
        ...state,
        editPostState
      };
    default:
      return state;
  }
};
const draftPostState = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.DRAFT_POST:
      let draftPostState = action.posts.data.post;
      return {
        ...state,
        draftPostState
      };
    default:
      return state;
  }
};

const article = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.RECEIVE_ARTICLE:
      let article = action.posts.data.article;
      return {
        ...state,
        article
      };
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
    default:
      return state;
  }
};
const addTags = (state = { addTagsState: false }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TAGS:
      return {
        ...state,
        addTagsState: true
      };
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
    default:
      return state;
  }
};

const exceptState = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.EXCEPTION_HANDLE:
      let exceptState = action.posts;
      return {
        ...state,
        exceptState
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  requestState,
  requestMainState,
  loginState,
  user,
  postList,
  posts,
  comments,
  tags,
  addPostState,
  editPostState,
  draftPostState,
  article,
  addTags,
  exceptState
});

export default rootReducer;

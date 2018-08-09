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
      let user = action.posts.data.user;
      return {
        ...state,
        ...user
      };
    case ActionTypes.LOGIN_CHECK:
      user = action.posts.data.user;
      return {
        ...state,
        ...user
      };
    default:
      return state;
  }
};
const userList = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_USERS:
      let userList = action.posts.data.users;
      return userList.map((item, index) => {
        return {
          ...state[index],
          ...item
        };
      });
    case ActionTypes.BAN_COUNT:
      let user = action.posts.data.user;
      return state.map(item => {
        if (item._id === user._id) {
          return user;
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};
const addUserState = (state = { addUserState: false }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_USERS:
      return {
        ...state,
        addUserState: true
      };
    case 'RESET_TOAST':
      return {
        ...state,
        addUserState: false
      };
    default:
      return state;
  }
};

const postList = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      let postList = action.posts.data.post.map(post => post._id);
      return [...state, postList];
    default:
      return state;
  }
};
const posts = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      let posts = action.posts.data.post;
      return [...state, posts];
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
        ...article
      };
    default:
      return state;
  }
};
const postHtml = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.MD_RENDER:
      let postHtml = action.posts.data;
      return {
        ...state,
        ...postHtml
      };
    default:
      return state;
  }
};
const comments = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_COMMENTS:
      let comments = action.posts;
      return [...state, comments];
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
    case 'RESET_TOAST':
      return {
        ...state,
        addTagsState: false
      };
    default:
      return state;
  }
};
const tags = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_TAGS:
      let tags = action.posts.data.tags;
      return tags.map((item, index) => {
        return {
          ...state[index],
          ...item
        };
      });
    case ActionTypes.DELETE_TAGS:
      let filterId = action.posts.data.delTag._id;
      return state.filter(tag => tag._id !== filterId);
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
const editUser = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.RECEIVE_USER_TO_EDIT:
      let editUser = action.posts.data.user;
      return {
        ...state,
        ...editUser
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
  userList,
  editUser,
  postList,
  posts,
  postHtml,
  comments,
  tags,
  addPostState,
  editPostState,
  draftPostState,
  article,
  addTags,
  exceptState,
  addUserState
});

export default rootReducer;

import { connect } from 'react-redux';
import Main from '../components/Main';
import { fetchPosts, exceptionHandle } from '../actions';

const firstAccess = { accessState: true };

/**
 * @firstAccess {boolean}判断是否是第一次进入该组件，因为第一次进入mapstateToProps会得到初始化的state，在Main组件的需要知道是第几次得到的，以便进行登录判断
 *
 * */
const mapStateToProps = state => {
  if (firstAccess.accessState) {
    firstAccess.accessState = false;
    return {
      firstAccess: true,
      loginState: state.loginState.loginState,
      requestState: state.requestState.state
    };
  } else {
    return {
      firstAccess: firstAccess.accessState,
      loginState: state.loginState.loginState,
      requestState: state.requestMainState.state,
      exceptState: state.exceptState
    };
  }
};
const mapDispatchToProps = dispatch => {
  const postParam = {
    url: '/admin/islogin',
    requestType: 'LOGIN_CHECK'
  };
  const requestPost = {
    url: '/getPost',
    requestType: 'FETCH_POSTS',
    section: 'main'
  };
  dispatch(fetchPosts(postParam));
  dispatch(fetchPosts(requestPost));
  return {
    tipsHandle: () => {
      dispatch(exceptionHandle('REMOVE_DIALOG', { tips: '' }));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

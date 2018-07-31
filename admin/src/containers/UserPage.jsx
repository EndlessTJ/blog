import { connect } from 'react-redux';
import User from '../components/User';
import { fetchPosts, receivePosts } from '../actions/index';

const mapStateToProps = state => {
  return {
    addState: state.addUserState.addUserState,
    editUser: state.editUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.match.params.userId) {
    let url = `/admin/userslist/${ownProps.match.params.userId}`;
    const userParam = {
      url: url,
      requestType: 'RECEIVE_USER_TO_EDIT'
    };
    dispatch(fetchPosts(userParam));
  }
  return {
    handleSubmit: postParam => {
      dispatch(fetchPosts(postParam));
    },
    toastHandle: () => {
      dispatch(receivePosts('RESET_TOAST', {}));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);

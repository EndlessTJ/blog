import { connect } from 'react-redux';
import User from '../components/User';
import { fetchPosts, receivePosts } from '../actions/index';

const mapStateToProps = state => {
  return {
    addState: state.addUserState.addUserState
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSubmit: postParam => {
    dispatch(fetchPosts(postParam));
  },
  toastHandle: () => {
    dispatch(receivePosts('RESET_TOAST', {}));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);

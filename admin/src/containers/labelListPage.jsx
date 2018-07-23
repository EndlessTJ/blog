import { connect } from 'react-redux';
import TagsList from '../components/labelList';
import { fetchPosts, receivePosts } from '../actions/index';

const mapStateToProps = state => {
  return {};
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
)(TagsList);

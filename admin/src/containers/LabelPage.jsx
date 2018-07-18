import { connect } from 'react-redux';
import Label from '../components/Label';
import { fetchPosts, receivePosts } from '../actions/index';

const mapStateToProps = state => {
  return {
    tagState: state.addTags
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
)(Label);

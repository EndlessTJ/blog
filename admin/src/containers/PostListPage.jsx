import { connect } from 'react-redux';
import PostList from '../components/PostList';
import { fetchPosts } from '../actions/index';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSubmit: postParam => {
    dispatch(fetchPosts(postParam));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);

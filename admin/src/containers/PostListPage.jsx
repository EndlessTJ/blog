import { connect } from 'react-redux';
import PostList from '../components/PostList';
import { fetchPosts } from '../actions/index';

const mapStateToProps = state => {
  return {
    posts: state.posts[0]
  };
};

const mapDispatchToProps = dispatch => {
  const requestPostList = {
    url: '/getPost',
    requestType: 'FETCH_POSTS'
  };
  dispatch(fetchPosts(requestPostList));
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);

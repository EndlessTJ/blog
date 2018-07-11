import { connect } from 'react-redux';
import PostList from '../components/PostList';
import { fetchPosts } from '../actions/index';

const mapStateToProps = state => {
  console.log(state);
  /*return{
    posts: state.posts.posts
	}*/
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: requestPostList => {
      dispatch(fetchPosts(requestPostList));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);

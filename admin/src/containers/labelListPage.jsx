import { connect } from 'react-redux';
import TagsList from '../components/labelList';
import { fetchPosts, receivePosts } from '../actions/index';

const mapStateToProps = state => {
  return {
    tags: state.tags.tags
  };
};

const mapDispatchToProps = dispatch => {
  const requestPostList = {
    url: '/admin/tagslist',
    requestType: 'FETCH_TAGS'
  };
  dispatch(fetchPosts(requestPostList));
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsList);

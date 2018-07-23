import { connect } from 'react-redux';
import UserList from '../components/userList';
import { fetchPosts } from '../actions/index';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  const requestPostList = {
    url: '/',
    requestType: 'FETCH_POSTS'
  };
  dispatch(fetchPosts(requestPostList));
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);

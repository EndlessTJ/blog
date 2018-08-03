import { connect } from 'react-redux';
import UserList from '../components/userList';
import { fetchPosts } from '../actions/index';

const mapStateToProps = state => {
  return {
    userList: state.userList
  };
};

const mapDispatchToProps = dispatch => {
  const requestPostList = {
    url: '/admin/userslist',
    requestType: 'FETCH_USERS'
  };
  dispatch(fetchPosts(requestPostList));
  return {
    banCount: userId => {
      const banData = {
        url: `/admin/bancount/${userId}`,
        requestType: 'BAN_COUNT'
      };
      dispatch(fetchPosts(banData));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);

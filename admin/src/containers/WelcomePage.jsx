import { connect } from 'react-redux';
import Welcome from '../components/Welcome';
import { formatDate } from '../middleware';

const mapStateToProps = state => {
  const activeDate = state.user.users.activeDate.map(value => {
    return formatDate(value, 'text', true);
  });
  return {
    nickname: state.user.users.nickname,
    pageView: 234,
    userRise: 23,
    posts: state.posts.posts,
    activeDate: activeDate
  };
};
const mapDispatchToProps = dispatch => {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);

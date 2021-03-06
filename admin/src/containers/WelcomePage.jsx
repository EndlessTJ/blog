import { connect } from 'react-redux';
import Welcome from '../components/Welcome';
import { formatDate } from '../middleware';

const mapStateToProps = state => {
  const activeDate = state.user.activeDate.map(value => {
    return formatDate(value, 'text', true);
  });
  return {
    nickname: state.user.nickname,
    pageView: 234,
    userRise: 23,
    posts: state.posts[0],
    activeDate: activeDate
  };
};
const mapDispatchToProps = dispatch => {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);

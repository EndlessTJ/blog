import { connect } from 'react-redux';
import User from '../components/User';
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
)(User);

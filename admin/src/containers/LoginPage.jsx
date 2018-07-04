import { connect } from 'react-redux';
import Login from '../components/Login';
import { fetchPosts } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  loginState: state.loginState.loginState
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSubmit: postParam => {
    dispatch(fetchPosts(postParam));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

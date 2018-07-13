import { connect } from 'react-redux';
import Label from '../components/Label';
import { fetchPosts } from '../actions/index';

const mapStateToProps = state => {
  console.log(state);
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
)(Label);

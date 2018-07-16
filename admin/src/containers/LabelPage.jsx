import { connect } from 'react-redux';
import Label from '../components/Label';
import { fetchPosts } from '../actions/index';

const mapStateToProps = state => {
  return {
    tagState: state.addTags
  };
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

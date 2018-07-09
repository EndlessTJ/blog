import { connect } from 'react-redux';
import PreviewPost from '../components/PreviewPost';
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
)(PreviewPost);

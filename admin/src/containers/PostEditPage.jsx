import { connect } from 'react-redux';
import PostEdit from '../components/PostEdit';
import { fetchPosts } from '../actions/index';

const mapStateToProps = state => {
  console.log(state);
};

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.match.params.postId) {
    let url = `/getarticle/${this.state.postId}`;
    const postParam = {
      url: url,
      requestType: 'RECEIVE_ARTICLE'
    };
    dispatch(fetchPosts(postParam));
  }
  return {
    handleSubmit: postParam => {
      dispatch(fetchPosts(postParam));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostEdit);

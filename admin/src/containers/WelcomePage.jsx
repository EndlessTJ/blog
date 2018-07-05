import { connect } from 'react-redux';
import Welcome from '../components/Welcome';

/*
* @firstAccess 判断是否是第一次进入该组件，因为第一次进入mapstateToProps会得到初始化的state，在Main组件的需要知道是第几次得到的，以便进行登录判断
*
* */
const mapStateToProps = state => {
  console.log(state);
  return {
    nickname: '',
    pageView: 234,
    postList: [],
    activeDate: []
  };
};
const mapDispatchToProps = dispatch => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);

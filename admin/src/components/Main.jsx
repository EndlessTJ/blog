import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import '../Main/Main.css';

// import component

import Footer from '../Footer/Footer';
import Header from '../Header/header';
import SlideNav from './Slidenav';
import Welcome from '../containers/WelcomePage';
// import routing

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.requestState || this.props.firstAccess ? (
          <div>加载中....</div>
        ) : this.props.loginState ? (
          <div>
            <Header />
            <div className="main-container">
              <SlideNav />
              <Route exact path="/admin/main" component={Welcome} />
              {/*<Route path="/admin/main/comment" component={Comment} />
                <Route path="/admin/main/label" component={Label} />
                <Route path="/admin/main/postlist" component={Postlist} />
                <Route path="/admin/main/postedit" component={Postedit} />
                <Route path="/admin/main/user" component={User} />
                <Route path="/admin/main/previewpost/:postId" component={PreviewPost} />
                <Route path="/admin/main/editpost/:postId" component={Postedit} />*/}
            </div>
            <Footer />
          </div>
        ) : (
          <Redirect to="/admin/login" />
        )}
      </div>
    );
  }
}

export default Main;

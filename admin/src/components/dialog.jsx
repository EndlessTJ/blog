import React, { Component } from 'react';
import '../assets/style/dialog.css';

class Dialog extends Component {
  render() {
    const tips = this.props.exceptState.exceptState
      ? this.props.exceptState.exceptState
      : {};
    if (tips.tips) {
      let timer = setTimeout(() => {
        this.props.callback(true);
        clearTimeout(timer);
      }, 1500);
    }
    /**
     * tips.code !== 'USER_NOT_LOGIN' 为了阻止当登录过期，刷新页面时会检测登录，
     * 此时如果没有这个条件则会弹出未登录提示，但此时页面会跳转到登录页面，说以当登录成功进入页面时还会显示出提示框一段时间,
     * 为了让提示框不出现，阻止USER_NOT_LOGIN时弹出提示
     */
    return (
      <div>
        {tips.tips && tips.code !== 'USER_NOT_LOGIN' ? (
          <div className={tips.tips ? 'dialog dialog-show' : 'dialog'}>
            <div
              className={
                tips.tips ? 'dialog-inner dialog-inner-show' : 'dialog-inner'
              }
            >
              <header className="dialog-header">
                <h2>提示</h2>
              </header>
              <section>
                <p>{tips.tips}</p>
              </section>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
export default Dialog;

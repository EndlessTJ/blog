import React, { Component } from 'react';
import './dialog.css';

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
    return (
      <div>
        {tips.tips ? (
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

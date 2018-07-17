import React, { Component } from 'react';
import './dialog.css';

class Dialog extends Component {
  render() {
    const tips = this.props.exceptState.exceptState
      ? this.props.exceptState.exceptState
      : {};
    return (
      <div className="dialog">
        <div className="dialog-inner">
          <header className="dialog-header">
            <h2>提示</h2>
          </header>
          <section className="dialog-tips">
            <p>标签已存在！</p>
          </section>
        </div>
        {/*{
					tips.tips ? <div className="dialog-inner">
						<header className="dialog-header">
							<h2>提示</h2>
						</header>
						<section>
							<p>{tips.tips}</p>
						</section>
					</div> : null
				}*/}
      </div>
    );
  }
}
export default Dialog;

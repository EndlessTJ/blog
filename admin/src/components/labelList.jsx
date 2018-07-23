import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../middleware';
import '../assets/style/tagsList.css';

class TagsList extends Component {
  render() {
    return (
      <div className="tagsList-container main-view">
        <div className="tagsList-card main-view-panel">
          <h1 className="tagsList-title main-view-title">博客档案馆</h1>
          <div className="tagsList-content" />
        </div>
      </div>
    );
  }
}

export default TagsList;

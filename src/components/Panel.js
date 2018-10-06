import React, { Component } from 'react';
import PanelHeading from './PanelHeading';
import PanelBody from './PanelBody';

class Panel extends Component {

  render() {
    return (
      <div className="panel-container">
        <PanelHeading {...this.props}/>
        <PanelBody {...this.props}/>
      </div>
    );
  }
}

export default Panel;

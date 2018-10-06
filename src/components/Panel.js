import React, { Component } from 'react';
import PanelHeading from './PanelHeading';
import PanelBody from './PanelBody';

class Panel extends Component {

  handleChange(value) {
    this.props.handleChange(value);
  }

  render() {
    return (
      <div className="panel-container">
        <PanelHeading {...this.props} handleChange={this.handleChange.bind(this)}/>
        <PanelBody {...this.props}/>
      </div>
    );
  }
}

export default Panel;

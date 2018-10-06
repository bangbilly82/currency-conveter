import React, { Component } from 'react';
import { getFullLabel } from '../utils/Rates';
import './PanelHeading.css';

class PanelHeading extends Component {

  render() {
    const { base, value } = this.props;
    return (
      <div className="panel-heading">
        <span>{base} - {getFullLabel(base)}</span>
        <div className="panel-title">
          <h3>{base}</h3>
          <h3>{value}</h3>
        </div>
      </div>
    );
  }
}

export default PanelHeading;

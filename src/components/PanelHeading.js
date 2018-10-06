import React, { Component } from 'react';
import { getFullLabel } from '../utils/Rates';
import './PanelHeading.css';

class PanelHeading extends Component {

  handleChange(evt) {
    evt.preventDefault();
    this.props.handleChange(evt.target.value);
  }

  render() {
    const { base, value } = this.props;
    return (
      <div className="panel-heading">
        <span>{base} - {getFullLabel(base)}</span>
        <div className="panel-title">
          <h3>{base}</h3>
          <h3>{value}</h3>
        </div>
        <div>
          <input type="text" placeholder="Initial Value" value={value} onChange={this.handleChange.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default PanelHeading;

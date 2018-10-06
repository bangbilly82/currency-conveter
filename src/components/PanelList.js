import React, { Component } from 'react';
import { getFullLabel, convertToLocalFormat } from '../utils/Rates';
import './PanelList.css';

class PanelList extends Component {

  generateCurrency() {
    const { rates, base, value } = this.props;
    const rate = rates.rates[base] * value;
    return convertToLocalFormat(rate);
  }

  removeHandler(index) {
    this.props.removeList(index);
  }

  render() {
    const { base, rates, index } = this.props;
    return (
      <div className="panel-list">
        <div className="panel-list-left">
          <div className="panel-list-title">
            <label>{base}</label>
            <label>{this.generateCurrency()}</label>
          </div>
          <span>{base} - {getFullLabel(base)}</span>
          <span className="default-currency">1 USD = {base + ' ' + rates.rates[base].toLocaleString()}</span>
        </div>
        <div className="panel-list-right">
          <span onClick={this.removeHandler.bind(this, index)}>(-)</span>
        </div>
      </div>
    );
  }
}

export default PanelList;

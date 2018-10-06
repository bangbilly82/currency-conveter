import React, { Component } from 'react';
import InputForm from './InputForm';
import PanelList from './PanelList';
import './PanelBody.css';

class PanelBody extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lists: ['IDR', 'EUR', 'GBP', 'SGD'], // Default set based on mockup
      isVisible: true
    };
    this.changeView = this.changeView.bind(this);
    this.removeList = this.removeList.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  removeList(index) {
    const { lists } = this.state; 
    const currentLists = lists;
    currentLists.splice(index, 1);
    const updatedLists = currentLists;
    this.setState({
      lists: updatedLists
    });
  }

  submitForm(value) {
    const { lists } = this.state;
    const currentLists = lists;
    currentLists.push(value)
    const updatedLists = currentLists;
    this.setState({
      lists: updatedLists,
      isVisible: !this.state.isVisible
    });
  }

  generatePanelList() {
    const { lists } = this.state;
    const { rates, value } = this.props;
    return lists.map((item, index) => {
      return (
        <PanelList
          key={index}
          base={item}
          rates={rates}
          value={value}
          index={index}
          removeList={this.removeList}/>
      )
    });
  }

  changeView() {
    this.setState({
      isVisible: !this.state.isVisible
    });
  }

  generateInputForm() {
    const { option } = this.props;
    return (
      <InputForm submit={this.submitForm} option={option}/>
    );
  }

  generateAddMore() {
    return (
      <div className="add-more" onClick={this.changeView}>
        <label>(+) Add More Currencies</label>
      </div>
    );
  }

  render() {
    const { isVisible } = this.state;
    return (
      <div className="panel-body">
        { this.generatePanelList() }
        { isVisible ? this.generateAddMore() : this.generateInputForm() }
      </div>
    );
  }
}

export default PanelBody;

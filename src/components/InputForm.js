import React, { Component } from 'react';
import './InputForm.css';

class InputForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      error: false,
      selectValue: this.props.option[0].value
    }
    this.selectHandle = this.selectHandle.bind(this);
    this.submitSelectForm = this.submitSelectForm.bind(this);
  }

  selectHandle(evt) {
    evt.preventDefault();
    this.setState({
      selectValue: evt.target.value
    });
  }

  submitSelectForm(evt) {
    evt.preventDefault();
    const { selectValue } = this.state;
    this.props.submit(selectValue.toUpperCase());
    this.setState({
      value: '',
      error: false
    });
  }

  generateSelect() {
    const { selectValue } = this.state;
    const { option } = this.props;
    return (
      <select onChange={this.selectHandle} value={selectValue}>
        {this.generateOptionList(option)}
      </select>
    )
  }

  generateOptionList(option) {
    return option.map((item, index) => {
      return (
        <option value={item.value} key={index}>{item.value}</option>
      );
    });
  }

  render() {
    return (
      <div className="input-form">
        <form className="input-form-2" onSubmit={this.submitSelectForm}>
          {this.generateSelect()}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default InputForm;

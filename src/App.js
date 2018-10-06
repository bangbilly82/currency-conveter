import React, { Component } from 'react';
import { fetchLatestRates } from './middleware/api';
import Config from './config/config';
import Panel from './components/Panel';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rates: null,
      base: Config.base,
      option: Config.option,
      value: 1,
      loading: true,
    }
  }

  componentDidMount() {
    const { base } = this.state;
    fetchLatestRates(base)
      .then(res => {
        this.setState({
          rates: res,
          loading: false
        });
      });
  }

  handleChange(value) {
    this.setState({
      value
    });
  }

  generateLoader() {
    return (
      <div className="loader-wrapper">
        <h3>Loading app...</h3>
      </div>
    );
  }

  generatePanel() {
    return (
      <div className="app-wrapper">
        <Panel {...this.state} handleChange={this.handleChange.bind(this)}/>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <React.Fragment>
        { loading ? this.generateLoader() : this.generatePanel() }
      </React.Fragment>
    );
  }
}

export default App;

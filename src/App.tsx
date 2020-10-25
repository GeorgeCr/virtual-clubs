import React, { Component } from 'react';
import DummyTest from './app/client/components/DummyTest';

export default class App extends Component {

  state = {
    data: {}
  }

  async componentDidMount() {
    const resp: any = await fetch('http://localhost:9000/').then(res => res.json());
    this.setState({
      data: resp
    });
  }

  render() {
    const { data } : any = this.state;
    return (
      <DummyTest message={data.message} />
    )
  }
}

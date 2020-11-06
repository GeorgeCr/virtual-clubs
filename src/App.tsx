import React, { Component } from 'react';
import DummyTest from './app/client/components/DummyTest';
import { connect } from 'react-redux';
import { increment, decrement, doThunk } from './app/client/redux/actions';

class App extends Component<{counter: string, increment: any, decrement: any, doThunk: any}> {

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
    const { counter, increment, decrement, doThunk } = this.props;
    return (
      <>
        <DummyTest message={data.message} />
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={doThunk}>DO</button>
        Current Value: {counter}
      </>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = {
  increment,
  decrement,
  doThunk
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

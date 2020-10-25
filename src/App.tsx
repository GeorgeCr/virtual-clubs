import React, { Component } from 'react';
import DummyTest from './app/client/components/DummyTest';
import { connect } from 'react-redux';
import { increment, decrement } from './app/client/redux/actions';

class App extends Component<{counter: string, increment: any, decrement: any}> {

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
    const { counter, increment, decrement } = this.props;
    return (
      <>
        <DummyTest message={data.message} />
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
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
  decrement
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

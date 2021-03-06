import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./app/client/redux/actions";
import { NavbarContainer } from "./app/client/components/NavbarContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./app/client/components/Landing";

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavbarContainer />
        <div className="mainContainer">
          <Router>
            <Switch>
              <Route path="/">
                <Landing />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

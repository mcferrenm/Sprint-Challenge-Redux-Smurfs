import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { getSmurfs } from "../actions";
import "./App.css";
import SmurfsList from "./SmurfsList";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="App">
        {this.props.isLoadingSmurfs && (
          <Loader type="Grid" color="#somecolor" height={80} width={80} />
        )}
        {this.props.error && <h2>Error!!!</h2>}
        <SmurfsList smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  isLoadingSmurfs: state.isLoadingSmurfs,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);

import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { getSmurfs } from "../actions";
import "./App.css";
import SmurfsList from "./SmurfsList";
import SmurfForm from "./SmurfForm";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    smurfInputs: {
      name: "",
      age: "",
      height: ""
    }
  };
  componentDidMount() {
    this.props.getSmurfs();
  }

  errorRender = () => <h2>Error!!!</h2>;

  loadingRender = () => <Loader type="Grid" height={80} width={80} />;

  handleChange = e => {
    e.persist();
    this.setState(prevState => ({
      smurfInputs: {
        ...prevState.smurfInputs,
        [e.target.name]: e.target.value
      }
    }));
  };

  render() {
    return (
      <div className="App">
        <SmurfForm
          smurfInputs={this.state.smurfInputs}
          handleChange={this.handleChange}
        />
        <SmurfsList smurfs={this.props.smurfs} />
        {this.props.isLoadingSmurfs && this.loadingRender()}
        {this.props.error && this.errorRender()}
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

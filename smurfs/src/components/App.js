import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { getSmurfs, addSmurf } from "../actions";
import "./App.css";
import SmurfsList from "./SmurfsList";
import SmurfForm from "./SmurfForm";

const CLEARED_SMURF_INPUTS = {
  name: "",
  age: "",
  height: ""
};

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

  handleAddSmurf = e => {
    e.preventDefault();

    this.props.addSmurf(this.state.smurfInputs);

    this.setState({
      smurfInputs: CLEARED_SMURF_INPUTS
    });
  };

  render() {
    return (
      <div className="App">
        <SmurfForm
          smurfInputs={this.state.smurfInputs}
          handleChange={this.handleChange}
          handleAddSmurf={this.handleAddSmurf}
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
  { getSmurfs, addSmurf }
)(App);

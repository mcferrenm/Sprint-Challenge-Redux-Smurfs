import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { Container, Row, Col } from "reactstrap";

import Jumbo from "./Jumbotron";

import {
  getSmurfs,
  addSmurf,
  populateInputs,
  updateSmurf,
  deleteSmurf
} from "../actions";
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
      height: "",
      id: ""
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

  handlePopulateInputs = (e, id) => {
    e.preventDefault();

    const selectedSmurf = this.props.smurfs.find(smurf => smurf.id === id);

    this.props.populateInputs();

    this.setState({
      smurfInputs: selectedSmurf
    });
  };

  handleUpdateSmurf = e => {
    e.preventDefault();

    this.props.updateSmurf(this.state.smurfInputs);

    this.setState({
      smurfInputs: CLEARED_SMURF_INPUTS
    });
  };

  handleDeleteSmurf = (e, id) => {
    e.preventDefault();

    this.props.deleteSmurf(id);
  };

  render() {
    return (
      <Container>
        <Jumbo />
        <Row>
          <Col xs="6">
            <SmurfForm
              smurfInputs={this.state.smurfInputs}
              handleChange={this.handleChange}
              handleAddSmurf={this.handleAddSmurf}
              isEditingSmurfs={this.props.isEditingSmurfs}
              handleUpdateSmurf={this.handleUpdateSmurf}
            />
            {this.props.isLoadingSmurfs && this.loadingRender()}
            {this.props.error && this.errorRender()}
          </Col>
          <Col xs="6">
            <SmurfsList
              smurfs={this.props.smurfs}
              handlePopulateInputs={this.handlePopulateInputs}
              handleDeleteSmurf={this.handleDeleteSmurf}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  isLoadingSmurfs: state.isLoadingSmurfs,
  isEditingSmurfs: state.isEditingSmurfs,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf, populateInputs, updateSmurf, deleteSmurf }
)(App);

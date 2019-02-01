import axios from "axios";

const BASE_URL = "http://localhost:3333";

export const GET_SMURFS_START = "GET_SMURFS_START";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAILURE = "GET_SMURFS_FAILURE";

export const ADD_SMURF_START = "ADD_SMURFS_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURFS_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURFS_FAILURE";

export const POPULATE_INPUTS_START = "POPULATE_INPUTS_START";

export const UPDATE_SMURF_START = "UPDATE_SMURFS_START";
export const UPDATE_SMURF_SUCCESS = "UPDATE_SMURFS_SUCCESS";
export const UPDATE_SMURF_FAILURE = "UPDATE_SMURFS_FAILURE";

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS_START });
  axios
    .get(`${BASE_URL}/smurfs`)
    .then(res => dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: GET_SMURFS_FAILURE, payload: err }));
};

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: ADD_SMURF_START });
  axios
    .post(`${BASE_URL}/smurfs`, newSmurf)
    .then(res => dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ADD_SMURF_FAILURE, payload: err }));
};

export const populateInputs = () => dispatch => {
  dispatch({ type: POPULATE_INPUTS_START });
};

export const updateSmurf = updatedSmurf => dispatch => {
  dispatch({ type: UPDATE_SMURF_START });
  axios
    .put(`${BASE_URL}/smurfs/${updatedSmurf.id}`, updatedSmurf)
    .then(res => dispatch({ type: UPDATE_SMURF_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: UPDATE_SMURF_FAILURE, payload: err }));
};

import axios from "axios";

const BASE_URL = "http://localhost:3333";

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const GET_SMURFS_START = "GET_SMURFS_START";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAILURE = "GET_SMURFS_FAILURE";

export const ADD_SMURF_START = "ADD_SMURFS_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURFS_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURFS_FAILURE";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

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

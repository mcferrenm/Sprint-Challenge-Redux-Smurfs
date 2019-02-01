/*
  Be sure to import in all of the action types from `../actions`
*/

import {
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE
} from "../actions";

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
  smurfs: [],
  isLoadingSmurfs: false,
  error: ""
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const smurfs = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS_START:
      return {
        ...state,
        isLoadingSmurfs: true,
        error: ""
      };
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isLoadingSmurfs: false
      };
    case GET_SMURFS_FAILURE:
      return {
        ...state,
        isLoadingSmurfs: false,
        error: action.payload
      };
    case ADD_SMURF_START:
      return {
        ...state,
        isLoadingSmurfs: true,
        error: ""
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isLoadingSmurfs: false
      };
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        isLoadingSmurfs: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default smurfs;

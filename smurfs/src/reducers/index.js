import {
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
  POPULATE_INPUTS_START
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
  isEditingSmurfs: false,
  error: ""
};

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
    case POPULATE_INPUTS_START:
      return {
        ...state,
        isEditingSmurfs: true
      };
    default:
      return state;
  }
};

export default smurfs;

/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCH_SUCCESS,
  FETCH_FAILED,
  ADD_SMURF,
  ADD_SUCCESS,
  ADD_FAILED,
  GET_SMURFS,
} from '../actions';

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
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case GET_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        fetchingSmurf: false,
        smurfs: action.payload,
        error: null
      }
    case FETCH_FAILED:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }
    case ADD_SMURF:
      return{
        ...state,
        addingSmurf: true
      }
    case ADD_SUCCESS:
      return{
        ...state,
        addingSmurf: false,
        smurfs: action.payload,
        error: null
      }
    case ADD_FAILED:
      return{
        ...state,
        addingSmurf: false,
        error: action.payload
      }
    // case DELETE_SMURF:
    //   return{
    //     ...state,
    //     smurfs: action.payload,
    //     deletingSmurf: true
    //   }
    // case DELETE_SUCCESS:
    //   return{
    //     ...state,
    //     smurfs: action.payload,
    //     deletingSmurf: !state.deletingSmurf
    //   }
  
    
  default:
    return state;  
  }
}

export default reducer;

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

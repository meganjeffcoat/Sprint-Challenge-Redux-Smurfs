import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const START_FETCH = 'START_FETCH';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILED = 'FETCH_FAILED';
export const ADD_SMURF = 'ADD_SMURF';
export const GET_SMURF = 'GET_SMURF';

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

export const startRequest = () => dispatch => {
  dispatch({ type: START_FETCH });
  axios 
    .get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({
        type: REQUEST_SUCCESS,
        payload: res
      })
    })
    .catch(err => {
      dispatch({
        type: REQUEST_FAIL,
        payload: err
      })
    })
}

import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILED = 'FETCH_FAILED';
export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILED = 'ADD_FAILED';
export const GET_SMURFS = 'GET_SMURFS';
// export const DELETE_SMURF = 'DELETE_SMURF';
// export const DELETE_SUCCESS = 'DELETE_SUCCESS';

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

const URL = 'http://localhost:3333/smurfs';

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS });
  axios 
    .get(URL)
    .then(res => {
      dispatch({
        type: FETCH_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: FETCH_FAILED,
        payload: err
      })
    })
}

export const addSmurf = smurfInfo => dispatch => {
  axios
    .post(URL, smurfInfo)
    .then(res => {
      dispatch({
        type: ADD_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: ADD_FAILED,
        payload: err
      })
    })
}


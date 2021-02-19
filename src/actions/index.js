import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const ADD_SMURF = 'ADD_SMURF';
export const ERROR = 'ERROR';


export const fetchSmurfs = () => {
    return dispatch => {
        dispatch(fetchStart());

        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                console.log(res.data)
                // DISPATCHING THE RES.DATA WASN'T WORKING SO I MAPPED.
                res.data.map(smurf => {
                    dispatch(fetchSuccess(smurf));
                })
            })
            .catch(err => {
                dispatch(errorMessage(err));
            })
    }
}


export const fetchStart = () => {
    return ({ type: FETCH_START })
}
export const fetchSuccess = (data) => {
    return ({ 
        type: FETCH_SUCCESS, 
        payload: {
            id: data.id, 
            name: data.name, 
            position: data.position, 
            nickname: data.nickname, 
            description: data.description
        }
    })
}
export const errorMessage = (error) => {
    return ({ type: FETCH_FAIL, payload: error })
}
export const setError = (error) => {
    return ({ type: ERROR, payload: error })
}
export const addSmurf = (data) => {
    return ({
        type: ADD_SMURF, 
        payload: {
            id: data.id, 
            name: data.name, 
            position: data.position, 
            nickname: data.nickname, 
            description: data.description
        }
    })
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
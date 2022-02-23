import axios from 'axios';

// ACTION TYPES
const CREATE_USER = 'CREATE_USER';

// ACTION CREATORS
export const _createUser = (user) => {
    return ({
        type: CREATE_USER,
        user,
    })
};


// THUNK CREATORS
export const createUser = (user) => async (dispatch) => {
    try {
        const response = await axios.post('/api/user/:id', user);
        dispatch(_createUser(response.data));
    } catch (err) {
        console.log ('Error inside createUser thunk: ', err)
    }
};


export default function userReducer(state = {}, action) {
  switch (action.type) {
    case CREATE_USER:
      return {...state, ...action.user}
    default:
      return state
  }
}

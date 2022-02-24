import axios from 'axios';

// ACTION TYPES
const CREATE_POEM1 = 'CREATE_POEM1';

// ACTION CREATORS
const _createPoem1 = (poem) => {
    return ({
        type: CREATE_POEM1,
        poem,
    })
};


// THUNK CREATORS
export const createPoem1 = (poem) => async (dispatch) => {
    try {
        const response = await axios.post('/api/poems/poem1', poem);
        dispatch(_createPoem1(response.data));
    } catch (err) {
        console.log ('Error inside createPoem1 thunk: ', err)
    }
};


export default function poem1Reducer(state = {}, action) {
  switch (action.type) {
    case CREATE_POEM1:
      return {...state, ...action.poem}
    default:
      return state
  };
};
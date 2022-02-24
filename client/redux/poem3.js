import axios from 'axios';

// ACTION TYPES
const CREATE_POEM3 = 'CREATE_POEM3';

// ACTION CREATORS
const _createPoem3 = (poem) => {
    return ({
        type: CREATE_POEM3,
        poem,
    })
};


// THUNK CREATORS
export const createPoem3 = (poem) => async (dispatch) => {
    try {
        const response = await axios.post('/api/poems/poem3', poem);
        dispatch(_createPoem3(response.data));
    } catch (err) {
        console.log ('Error inside createPoem3 thunk: ', err)
    }
};


export default function poem3Reducer(state = {}, action) {
  switch (action.type) {
    case CREATE_POEM3:
      return {...state, ...action.poem}
    default:
      return state
  };
};

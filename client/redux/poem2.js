import axios from 'axios';

// ACTION TYPES
const CREATE_POEM2 = 'CREATE_POEM2';

// ACTION CREATORS
const _createPoem2 = (poem) => {
    return ({
        type: CREATE_POEM2,
        poem,
    })
};


// THUNK CREATORS
export const createPoem2 = (poem) => async (dispatch) => {
    try {
        const response = await axios.post('/api/poems/poem2', poem);
        dispatch(_createPoem2(response.data));
    } catch (err) {
        console.log ('Error inside createPoem2 thunk: ', err)
    }
};


export default function poem2Reducer(state = {}, action) {
  switch (action.type) {
    case CREATE_POEM2:
      return {...state, ...action.poem}
    default:
      return state
  };
};

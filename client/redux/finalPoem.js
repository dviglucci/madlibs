import axios from 'axios';

// ACTION TYPES
const SAVE_FINAL_POEM = 'SAVE_FINAL_POEM';

// ACTION CREATORS
const _saveFinalPoem = (poem) => {
    return ({
        type: SAVE_FINAL_POEM,
        poem,
    })
};


// THUNK CREATORS
export const saveFinalPoem = (poem) => async (dispatch) => {
    console.log('inside saveFinalPoem thunk >>>>', poem)
    try {
        const response = await axios.post('/api/poems/finalPoem', poem);
        dispatch(_saveFinalPoem(response.data));
    } catch (err) {
        console.log ('Error inside saveFinalPoem thunk: ', err)
    }
};


export default function finalPoemReducer(state = {}, action) {
  switch (action.type) {
    case SAVE_FINAL_POEM:
      return {...state, ...action.poem}
    default:
      return state
  };
};

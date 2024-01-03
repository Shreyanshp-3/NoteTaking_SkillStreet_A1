// noteReducer.js
const initialState = {
  title: '',
  body: '',
};

const note = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TITLE':
      return { ...state, title: action.payload };
    case 'SET_BODY':
      return { ...state, body: action.payload };
    case 'CLEAR_NOTE':
      return { ...initialState };
    default:
      return state;
  }
};

export default note;

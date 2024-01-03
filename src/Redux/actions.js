// redux/actions.js
export const setTitle = (title) => ({
    type: 'SET_TITLE',
    payload: title,
  });
  
  export const setBody = (body) => ({
    type: 'SET_BODY',
    payload: body,
  });
  
// actions.js
export const clearNote = () => ({
  type: 'CLEAR_NOTE',
});

// store.js
import { createStore, combineReducers } from 'redux';
import noteReducer from './reducers';

const rootReducer = combineReducers({
  note: noteReducer,
  // other reducers...
});

const store = createStore(rootReducer);

export default store;

import { createStore } from 'redux';
import notesReducer from './reducers';

const store = createStore(notesReducer);

export default store;
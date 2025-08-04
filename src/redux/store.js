import { createStore } from 'redux';
import notesReducer from './reducers';

const initialState = {
  notes: [],
  selectedNoteId: null,
  nextId: 1,
  searchText: "",
  selectedNoteTags: [],
  theme: "light"
};

const persistedState = JSON.parse(localStorage.getItem("reduxState")) || initialState;

const store = createStore(notesReducer, persistedState);

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
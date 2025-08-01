import { CREATE, SET, SELECT, SEARCH, STAR, ADD, DELETE, DELETE2, SELECT2, SAVE } from "./constant"

export const createNote = (note) => ({
  type: CREATE,
  payload: note,
});

export const setNotes = (notes) => ({
  type: SET,
  payload: notes
});

export const selectNote = (noteId) => ({
  type: SELECT,
  payload: noteId,
});

export const searchNote = (searchText) => ({
  type: SEARCH,
  payload: searchText
})

export const starNote = (id) => ({
  type: STAR,
  payload: id
})

export const addTag = (note) => ({
  type: ADD,
  payload: note
})

export const deleteTag = (note) => ({
  type: DELETE,
  payload: note
})

export const deleteNote = (id) => ({
  type: DELETE2,
  payload: id
})

export const selectTag = (tag) => ({
  type: SELECT2,
  payload: tag
})

export const save = (note) => ({
  type: SAVE,
  payload: note,
});

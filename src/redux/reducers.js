import { CREATE, SET, SELECT, SEARCH, STAR, ADD, DELETE, DELETE2, SELECT2, SAVE } from "./constant"

const initialState = {
    notes: [],
    selectedNoteId: null,
    nextId: 1,
    searchText: "",
    selectedNoteTags: []
};

export default function notesReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE:
            const newNote = {
                ...action.payload,
                id: state.nextId,
            };
            return {
                ...state,
                notes: [...state.notes, newNote],
                nextId: state.nextId + 1,
            };
        case SET:
            return {
                ...state,
                notes: action.payload
            };
        case SELECT:
            return {
                ...state,
                selectedNoteId: action.payload,
            };
        case SEARCH:
            return {
                ...state,
                searchText: action.payload,
            }
        case STAR:
            return {
                ...state,
                notes: state.notes.map(note =>
                    note.id === action.payload ? { ...note, isStarred: !note.isStarred } : note
                ),
            };
        case ADD:
            return {
                ...state,
                notes: state.notes.map(note =>
                    note.id === action.payload.id
                        ? { ...note, tags: [...note.tags, action.payload.tag] }
                        : note
                ),
            };
        case DELETE:
            return {
                ...state,
                notes: state.notes.map(note =>
                    note.id === action.payload.id
                        ? { ...note, tags: note.tags.filter(t => t !== action.payload.tag) }
                        : note
                ),
            }
        case DELETE2:
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload),
                selectedNoteId: null,
            }
        case SELECT2:
            return {
                ...state,
                selectedNoteTags: state.selectedNoteTags.includes(action.payload)
                    ? state.selectedNoteTags.filter(tag => tag !== action.payload)
                    : [...state.selectedNoteTags, action.payload],
            }
        case SAVE:
            return {
                ...state,
                notes: state.notes.map(note =>
                    note.id === action.payload.id
                        ? { ...note, content: action.payload.content, updateAt: action.payload.updateAt }
                        : note
                ),
            };
        default:
            return state
    }
}

// [
//   {
//     "id": 1,
//     "title": "Note 1",
//     "description": "This is the first note.",
//     "tags": ["tag1", "tag2"],
//     "date": "2025-07-31T12:34:56Z",
//     "content": "adshbaibfeaiwbfeiw "
//   },
//   {
//     "id": 2,
//     "title": "Note 2",
//     "description": "This is the second note.",
//     "tags": ["tag3", "tag4"],
//     "date": "2025-07-30T12:34:56Z"
//     "content": "adshbaibfeaiwbfeiw "
//   }
// ]
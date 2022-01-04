export const notesReducer = (state ={notes:[]}, action) => {
    switch(action.type){
        case 'FETCH_NOTES':
            return {notes: action.payload}
        case 'ADD_NOTE':
            return {...state, notes: [...state.notes, action.payload]}
        default:
            return state // it returns a default inital state if no action is provided
    }

} 
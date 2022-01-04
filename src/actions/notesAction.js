// create the action that's going to fetch the notes from api

export const fetchNotes = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/notes')
        .then(resp => resp.json())
        .then(notes => dispatch({type: 'FETCH_NOTES', payload: notes}))
    }
}

export const addNote =(data) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/notes', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        .then(resp => resp.json())
        .then(note => dispatch({type: 'ADD_NOTE', payload: note}))
    }


}
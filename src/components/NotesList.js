import React from "react";
import { connect } from "react-redux";


const NotesList = ({notes}) => {
    return(
        <div>
            <h1>Your Note List Below:</h1> 
            {notes.map(note =>
                <ul key={note.id}>
                    <li>
                        <h2>{note.subject}</h2>
                        <p>{note.lesson_name}</p> 
                        <p>{note.date}</p>
                        <p>{note.note_entry}</p>
                    </li>
                </ul>
            )}
        </div>    ) 
}

const mapStateToProps = state => {
    return { notes: state.notes}
}

export default connect(mapStateToProps)(NotesList);
// this will be our container where data & methods would be
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNotes } from '../actions/notesAction'
import NotesForm from '../components/NotesForm'

class NotesContainer extends Component {
    componentDidMount() {
        this.props.fetchNotes()
    }
    render () {
        return(
            <div>
                <h2>Create Notes below ⬇</h2>
                <NotesForm />
            </div>

        )
    }
}

export default connect(null, { fetchNotes })(NotesContainer);
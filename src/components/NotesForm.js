import React, {Component} from 'react';
import { connect } from 'react-redux';
import {addNote} from '../actions/notesAction';

class NotesForm extends Component { 
    state ={
        subject: '',
        lesson_name: '',
        date: '',
        note_entry: ''                                 
    }

    handleChange =(event)=> {           
     this.setState({ 
        [event.target.name] : event.target.value 
     })
    }

    handleSubmit =(event)=> {
        event.preventDefault()
        this.props.addNote(this.state)  
        this.setState({
            subject: '',
            lesson_name: '',
            date: '',
            note_entry: ''
        })
    }
  //Before the render we're giving a set of instructions on how to build our component
    render(){
        return( 
            
            <form onSubmit={this.handleSubmit}>
                <label>Subject:</label>
                <input type='text' value={this.state.subject} onChange={this.handleChange} name="subject"/>
                <br/><br/>

                <label>Lesson name:</label>
                <input type='text' value={this.state.lesson_name} onChange={this.handleChange} name="lesson_name"/>
                <br/><br/>

                <label>Date:</label>
                <input type='text' value={this.state.date} onChange={this.handleChange} name="date"/>
                <br/><br/>

                <label>Note Entry:</label>
                <input type='text' value={this.state.note_entry} onChange={this.handleChange} name="note_entry"/>
                <br/><br/>

                <input type='submit' value="Create Note" />
            </form>
        )
    }
}

export default connect(null, {addNote})(NotesForm);
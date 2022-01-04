import React from 'react';
import Router from '../components/Router'
import NotesContainer from './NotesContainer';
import Footer from '../components/Footer';
import NotesList from '../components/NotesList';

const App =() => {
  return(
    <div className= 'container'>
      <Router />
      <NotesContainer />
      <NotesList />
      <Footer />
    </div>
  )
}

export default App;
import React from 'react';
import uuid from 'uuid/v4';
import NoteForm from '../noteForm/noteForm';
import NoteList from '../noteList/noteList';
import autoBind from '../../utils';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      error: null,
    };

    autoBind.call(this, Dashboard);
  }

  handleAddNote(note) {
    if (note.title === '') {
      return this.setState({ error: true });
    }

    note.createdOn = new Date();

    return this.setState((previousState) => {
      return {
        notes: [...previousState.notes, { ...note, id: uuid() }],
        error: null,
      };
    });
  }

  handleRemoveNote(noteToRemove) {
    return this.setState((previousState) => {
      return {
        notes: previousState.notes.filter(note =>
          note.id !== noteToRemove.id),
      };
    });
  }

  handleUpdateNote(noteToUpdate) {
    return this.setState((previousState) => {
      return {
        note: previousState.notes.map(note =>
          (note.id === noteToUpdate.id ? noteToUpdate : note)),
      };
    });
  }

  render() {
    return (
      <section className="dashboard">
        <h1>Dashboard</h1>
        <NoteForm
          handleAddNote={this.handleAddNote} 
        />
        <p> All notes: </p>
        <NoteList
        notes={this.state.notes}
        handleRemoveNote={this.handleRemoveNote}
        handleUpdateNote={this.handleUpdateNote}
        />
        { this.state.error && <h2 className="error">You must enter a title.</h2> }
      </section>
    );
  }
}

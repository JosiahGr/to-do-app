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
    note.id = uuid();

    return this.setState((previousState) => {
      return {
        notes: [...previousState.notes, note],
        error: null,
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
        { this.state.error && <h2 className="error">You must enter a title.</h2> }
        <p> All notes: </p>
        <NoteList notes={this.state.notes} />
      </section>
    );
  }
}

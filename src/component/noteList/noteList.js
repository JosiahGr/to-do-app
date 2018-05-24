import React from 'react';

export default class NoteForm extends React.Component {
  render() {
    return (
    <ul>
      {
        this.props.notes.map((note) => {
          return (
            <li key={note.id}>
            {note.title} : {note.content}
            </li>
          );
        })
      }
    </ul>
    );
  }
}

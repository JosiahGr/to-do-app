import React from 'react';
import NoteItem from '../noteItem/noteItem';
import autoBind from '../../utils/index';

class NoteList extends React.Component {
  constructor(props) {
    super(props);

    autoBind.call(this, NoteList);
  }
  render() {
    return (
    <ul>
      {
        this.props.notes.map((note) => {
          return (
            <li key={note.id}>
            <NoteItem
            note={note}
            id={note.id}
            handleRemoveNote={this.props.handleRemoveNote}
            handleUpdateNote={this.props.handleUpdateNote}
            />
            </li>
          );
        })
      }
    </ul>
    );
  }
}

export default NoteList;

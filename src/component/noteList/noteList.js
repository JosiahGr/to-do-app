import React from 'react';
import NoteItem from '../noteItem/noteItem';
import autoBind from '../../utils/index';

export default class NoteList extends React.Component {
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
            <NoteItem
            key={note.id}
            note={note}
            id={note.id}
            handleRemoveNote={this.props.handleRemoveNote}
            />
          );
        })
      }
    </ul>
    );
  }
}

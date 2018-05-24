import React from 'react';

export default class NoteList extends React.Component {
  render() {
    return (
      <section className="noteItem">
      {this.props.note.title}
      {this.props.note.content}
      </section>
    );
  }
}

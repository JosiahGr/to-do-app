import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal/modal';
import NoteForm from '../noteForm/noteForm';
import autoBind from '../../utils/index';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);

    autoBind.call(this, NoteItem);
  }
  render() {
    const { note, handleRemoveNote, handleUpdateNote } = this.props;

    const showModal = () => handleUpdateNote({ ...note, editing: true });

    const hideModal = () => handleUpdateNote({ ...note, editing: false });

    const updateAndClose = (updatedNote) => {
      handleUpdateNote({ ...updatedNote, editing: false });
    };

    return (

      <div className='noteItem'>
      <strong>{note.title}</strong> : ${note.price}
      <button onClick={handleRemoveNote.bind(null, note)}> Remove </button>
      <button onClick={showModal}>Update</button>
      <Modal show={note.editing} handleClose={hideModal}>
        { /* Vinicio- Everything inside these lines will become props.children */ }
        <h3>Editing {note.title}</h3>
        <NoteForm handleComplete={updateAndClose} note={note} />
      </Modal>
    </div>

    // <section className="noteItem">
    // {this.props.note.title} : 
    // {this.props.note.content}
    // <button onClick={() => this.props.handleRemoveNote(this.props.note)}> Remove </button>
    // </section>
    );
  }
}

NoteItem.PropTypes = {
  note: PropTypes.object,
  handleRemoveNote: PropTypes.func,
  handleUpdateNote: PropTypes.func,
};

export default NoteItem;

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
      <a href="#" onDoubleClick={showModal}><strong>{note.title}</strong> : {note.content} </a>
      <button onClick={handleRemoveNote.bind(null, note)}> delete </button>
      <Modal show={note.editing} handleClose={hideModal}>
        <h3>Editing {note.title}</h3>
        <NoteForm handleComplete={updateAndClose} note={note} />
      </Modal>
    </div>
    );
  }
}

NoteItem.propTypes = {
  note: PropTypes.object,
  handleRemoveNote: PropTypes.func,
  handleUpdateNote: PropTypes.func,
};

export default NoteItem;

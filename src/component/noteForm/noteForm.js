import React from 'react';
import PropTypes from 'prop-types';
import autoBind from './../../utils';

export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: '',
      content: '',
    };

    autoBind.call(this, NoteForm);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleComplete(this.state);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const buttonText = this.props.note ? 'Update' : 'Create';
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          name="title"
          placeholder="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input 
          type="text"
          name="content"
          placeholder="content"
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button type="submit">{buttonText} Create Note</button>
      </form>
    );
  }
}

NoteForm.propTypes = {
  note: PropTypes.object,
  handleComplete: PropTypes.func,
};

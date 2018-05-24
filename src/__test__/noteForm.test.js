import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NoteForm from './../component/noteForm/noteForm';

configure({ adapter: new Adapter() });

describe('NoteForm testing', () => {
  test('Simple test for initial state', () => {
    const mountedNoteForm = mount(<NoteForm />);
    expect(mountedNoteForm.state('title')).toEqual('');
  });
});

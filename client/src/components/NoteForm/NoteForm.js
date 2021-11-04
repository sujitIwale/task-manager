import React, { useContext, useState } from 'react';
import { NotesContext } from '../../context/NotesCotext';
import './NoteForm.css';

const NoteForm = () => {
	const [Note, setNote] = useState('');
	const notesContext = useContext(NotesContext);
	const { addNote } = notesContext;
	const changeHandler = (e) => {
		setNote(e.target.value);
	};
	const submitHandler = (e) => {
		e.preventDefault();
		if (Note === '') {
			return;
		}
		addNote(Note);
		setNote('');
	};
	return (
		<form className='note-form' onSubmit={submitHandler}>
			<textarea
				type='text'
				onChange={changeHandler}
				value={Note}
				placeholder="Add Note's"
			/>
			<div className='pointer' onClick={submitHandler}>
				<img
					src='https://img.icons8.com/material-outlined/48/000000/plus--v1.png'
					alt='svg'
				/>
			</div>
		</form>
	);
};

export default NoteForm;

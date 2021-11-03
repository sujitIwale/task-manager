import React, { Fragment, useState } from 'react';
import NoteForm from '../../components/NoteForm/NoteForm';
import NotesList from '../../components/NotesList/NotesList';


const Notes = () => {
	const [List, setList] = useState(new Set());

	const addNote = (note) => {
		List.add({ text: note, index: List.length, done: false });
		setList(new Set(List));
	};
	const removeNote = (note) => {
		List.delete(note);
		// console.log(List);
		setList(new Set(List));
	};
	return (
		<Fragment>
			<div className='notes-container'>
				<NoteForm addNote={addNote} />
				<NotesList List={List} />
			</div>
		</Fragment>
	);
};





export default Notes;

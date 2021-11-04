import React, { Fragment } from 'react';
import NoteForm from '../../components/NoteForm/NoteForm';
import NotesList from '../../components/NotesList/NotesList';
import { NotesState } from '../../context/NotesCotext';
import { resizeAllGridItems } from '../../resize';

const Notes = () => {
	window.addEventListener('resize', resizeAllGridItems);

	// const addNote = (note) => {
	// 	List.add({ text: note, index: List.length, done: false });
	// 	setList(new Set(List));
	// 	resizeAllGridItems();
	// };
	// const removeNote = (note) => {
	// 	List.delete(note);
	// 	// console.log(List);
	// 	setList(new Set(List));
	// };
	return (
		<Fragment>
			<NotesState>
				<div className='notes-container'>
					<NoteForm />
					<NotesList />
				</div>
			</NotesState>
		</Fragment>
	);
};





export default Notes;

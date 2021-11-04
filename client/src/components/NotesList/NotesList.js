import React, { useContext } from 'react';
import { NotesContext } from '../../context/NotesCotext';
import { resizeAllGridItems } from '../../resize';
import Note from '../Note/Note';
import './NoteList.css';

const getNotes = (list) => {
	const Notes = [];
	let index = 0;
	for (let note of list) {
		Notes.push(<Note Note={note} key={index} />);
		index++;
	}
	return Notes;
};

const NotesList = () => {
	setTimeout(() => {
		resizeAllGridItems();
	}, 100);
	const notesContext = useContext(NotesContext);
	const { List } = notesContext;
	return List && List.size > 0 ? (
		<div className='notes-list-container customized-scrollbar'>
			<div className='notes-list grid'>{getNotes(List)}</div>
		</div>
	) : (
		<div className='notes-list-container'>
			<h2>No Notes</h2>
		</div>
	);
};

export default NotesList;

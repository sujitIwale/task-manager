import React from 'react';
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

const NotesList = ({ List }) => {
	// const NoteContext = useContext(NoteContext);
	// const { List, removeNote } = NoteContext;
	return List && List.size > 0 ? (
		<div className='note-list customized-scrollbar'>{getNotes(List)}</div>
	) : (
		<h2>No Notes</h2>
	);
};

export default NotesList;

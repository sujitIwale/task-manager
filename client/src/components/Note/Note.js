import React from 'react';
import './Note.css';

const Note = ({ Note }) => {
	// setTimeout(() => {
	// 	resizeAllGridItems();
	// }, 100);
	return (
		<div className='note'>
			<div className='sub'>
				<span>{Note.text}</span>
			</div>
		</div>
	);
};

export default Note;

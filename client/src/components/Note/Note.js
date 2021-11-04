import React from 'react';
import './Note.css';

const Note = ({ Note }) => {
	// setTimeout(() => {
	// 	resizeAllGridItems();
	// }, 100);
	return (
		<div className='note'>
			<div className='sub'>
				<p>{Note.text}</p>
			</div>
		</div>
	);
};

export default Note;

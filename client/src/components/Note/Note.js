import React from 'react';
import './Note.css';

const Note = ({ Note }) => {
	// const [Checked, setChecked] = useState(note.done);

	return (
		<div className='note'>
			<span>{Note.text}</span>
		</div>
	);
};

export default Note;

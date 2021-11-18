import React, { useState } from 'react';
import Button from '../../Shared/Button/Button';
import './AddForm.css';

const AddForm = ({ addTask, groupIndex }) => {
	const [Task, setTask] = useState({});

	const changeHandler = (e) => {
		setTask({ ...Task, [e.target.name]: e.target.value.trim() });
	};
	return (
		<form
			className='kanban-form'
			onSubmit={() => {
				addTask(Task, groupIndex);
			}}>
			<input
				type='text'
				name='title'
				onChange={changeHandler}
				placeholder='Enter Task'
			/>
			<textarea
				type='text'
				name='description'
				onChange={changeHandler}
				placeholder='Enter Description'
			/>
			<div className='add-btn-container'>
				<Button
					textValue='Add'
					onClick={() => {
						addTask(Task, groupIndex);
					}}
					bgColor='rgb(224, 21, 62)'
					className='add-btn'
					type='submit'
				/>
			</div>
			{/* <button type='submit' className='pointer'>
				<i class='fas fa-plus'></i>
			</button> */}
		</form>
	);
};

export default AddForm;

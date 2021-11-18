import React, { useState } from 'react';
import Button from '../../Shared/Button/Button';
import './AddForm.css';

const AddForm = ({
	task = { title: '', description: '' },
	addTask,
	groupIndex,
	taskIndex,
	updateTask,
	type,
}) => {
	console.log('AddForm', task);
	const [Task, setTask] = useState(task);

	const changeHandler = (e) => {
		setTask({ ...Task, [e.target.name]: e.target.value });
	};
	const submitHandler = (e) => {
		e.preventDefault();
		if (Task.title && Task.title !== '') {
			Task.title = Task.title.trim();
			Task.description = Task.description || '';
			if (type === 'add') addTask(Task, groupIndex);
			else if (type === 'update') updateTask(Task, groupIndex, taskIndex);
		}
	};
	return (
		<form className='kanban-form' onSubmit={submitHandler}>
			<label>Title</label>
			<input
				type='text'
				name='title'
				onChange={changeHandler}
				placeholder='Enter Task'
				value={Task.title}
			/>
			<label>Description</label>
			<textarea
				type='text'
				name='description'
				onChange={changeHandler}
				placeholder='Enter Description'
				value={Task.description}
			/>
			<div className='add-btn-container'>
				<Button
					textValue={type === 'add' ? 'Add' : 'Update'}
					onClick={submitHandler}
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

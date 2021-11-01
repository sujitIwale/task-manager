import React, { useState } from 'react';
import './TodoForm.css';

const TodoForm = ({ addTodo }) => {
	const [Task, setTask] = useState('');

	const changeHandler = (e) => {
		setTask(e.target.value);
	};
	const submitHandler = (e) => {
		e.preventDefault();
		if (Task === '') {
			return;
		}
		addTodo(Task);
		setTask('');
	};
	return (
		<form className='todo-form' onSubmit={submitHandler}>
			<input
				type='text'
				onChange={changeHandler}
				value={Task}
				placeholder="Add Todo's"
			/>
			<button type='submit' className='pointer'>
				Add
			</button>
		</form>
	);
};

export default TodoForm;

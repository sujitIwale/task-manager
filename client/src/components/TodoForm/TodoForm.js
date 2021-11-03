import React, { useContext, useState } from 'react';
import { TodoContext } from '../../context/TodoContext';
import './TodoForm.css';

const TodoForm = () => {
	const [Task, setTask] = useState('');
	const todoContext = useContext(TodoContext);
	const { addTodo } = todoContext;
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

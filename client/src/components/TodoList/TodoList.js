import React from 'react';
import Todo from '../Todo/Todo';
import './TodoList.css';

const getTodos = (list, dispatch) => {
	const todos = [];
	let index = 0;
	for (let todo of list) {
		todos.push(
			<Todo todo={todo} dispatch={dispatch} key={index} index={index} />
		);
		index++;
	}
	return todos;
};

const TodoList = ({ list, dispatch }) => {
	console.log(list);
	return list && list.size > 0 ? (
		<div className='todo-list customized-scrollbar'>
			{getTodos(list, dispatch)}
		</div>
	) : (
		<h2>No Todos</h2>
	);
};

export default TodoList;

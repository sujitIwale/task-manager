import React from 'react';
import Todo from '../Todo/Todo';
import './TodoList.css';

const getTodos = (list, removeTodo) => {
	const todos = [];
	let index = 0;
	for (let todo of list) {
		todos.push(
			<Todo
				todo={todo}
				removeTodo={removeTodo}
				key={index}
				index={index}
			/>
		);
		index++;
	}
	return todos;
};

const TodoList = ({ list, removeTodo }) => {
	console.log(list);
	return list && list.size > 0 ? (
		<div className='todo-list customized-scrollbar'>
			{getTodos(list, removeTodo)}
		</div>
	) : (
		<h2>No Todos</h2>
	);
};

export default TodoList;

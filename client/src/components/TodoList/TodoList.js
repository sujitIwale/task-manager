import React from 'react';
import { useTodo } from '../../hooks/useTodo';
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

const TodoList = () => {
	const { List, removeTodo } = useTodo();
	return List && List.size > 0 ? (
		<div className='todo-list customized-scrollbar'>
			{getTodos(List, removeTodo)}
		</div>
	) : (
		<h2>No Todos</h2>
	);
};

export default TodoList;

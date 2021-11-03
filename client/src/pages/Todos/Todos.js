import React, { Fragment } from 'react';
import TodoForm from '../../components/TodoForm/TodoForm';
import TodoList from '../../components/TodoList/TodoList';
import { TodoState } from '../../context/TodoContext';

const Todos = () => {
	return (
		<Fragment>
			<TodoState>
				<div className='container'>
					<TodoForm />
					<TodoList />
				</div>
			</TodoState>
		</Fragment>
	);
};

export default Todos;

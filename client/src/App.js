import { Fragment, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

function App() {
	const [List, setList] = useState(new Set());

	const addTodo = (todo) => {
		List.add({ name: todo, index: List.length, done: false });
		setList(new Set(List));
	};
	const removeTodo = (todo) => {
		List.delete(todo);
		// console.log(List);
		setList(new Set(List));
	};
	return (
		<Fragment>
			<Header />
			<div className='container'>
				<TodoForm addTodo={addTodo} />
				<TodoList list={List} removeTodo={removeTodo} />
			</div>
		</Fragment>
	);
}

export default App;

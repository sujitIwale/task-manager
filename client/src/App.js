import { Fragment, useReducer } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import Reducer from './reducer/Reducer';

function App() {
	const initialState = {
		List: new Set(),
	};
	console.log('app rendered');
	const [state, dispatch] = useReducer(Reducer, initialState);
	// const [List, setList] = useState(new Set());

	// const addTodo = (todo) => {
	// 	List.add({ name: todo, index: List.length, done: false });
	// 	setList(new Set(List));
	// };
	// const removeTodo = (todo) => {
	// 	List.delete(todo);
	// 	// console.log(List);
	// 	setList(new Set(List));
	// };
	return (
		<Fragment>
			<Header />
			<div className='container'>
				<TodoForm dispatch={dispatch} />
				<TodoList list={state.List} dispatch={dispatch} />
			</div>
		</Fragment>
	);
}

export default App;

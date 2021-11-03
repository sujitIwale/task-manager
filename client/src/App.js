import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Todos from './pages/Todos/Todos';

function App() {
	console.log('app rendered');
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
		<Router>
			<Header />
			<Navbar />
			<Switch>
				<Route exact path='/todos'>
					<Todos />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;

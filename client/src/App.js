import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Kanban from './pages/Kanban/Kanban';
import Landing from './pages/Landing/Landing';
import Notes from './pages/Notes/Notes';
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
				{/* <Route exact path='/'>
					<Landing />
				</Route> */}
				<Route exact path='/todos'>
					<Todos />
				</Route>
				<Route exact path='/kanban'>
					<Kanban />
				</Route>
				<Route exact path='/notes'>
					<Notes />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;

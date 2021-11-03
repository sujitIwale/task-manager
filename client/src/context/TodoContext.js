import { createContext, useReducer } from 'react';
import Reducer from '../reducer/TodoReducer';

export const TodoContext = createContext('hey');

export const TodoState = (props) => {
	const initialState = {
		List: new Set(),
	};
	console.log('app rendered');
	const [state, dispatch] = useReducer(Reducer, initialState);

	const addTodo = (todo) => {
		dispatch({ type: 'ADDTODO', payload: todo });
	};

	const removeTodo = (todo) => {
		dispatch({ type: 'REMOVETODO', payload: todo });
	};

	return (
		<TodoContext.Provider
			value={{
				List: state.List,
				addTodo,
				removeTodo,
			}}>
			{props.children}
		</TodoContext.Provider>
	);
};

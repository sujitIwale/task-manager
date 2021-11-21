import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export const useTodo = () => {
	const todoContext = useContext(TodoContext);
	if (todoContext) return todoContext;
};

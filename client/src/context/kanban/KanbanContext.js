import { createContext, useReducer } from 'react';
import KanbanReducer from '../../reducer/kanban/KanbanReducer';
import { SET_DRAGGING, SET_LIST } from '../types';

export const KanbanContext = createContext();

export const KanbanState = (props) => {
	const initialState = {
		list: [
			{
				title: 'Todo',
				tasks: [
					{ title: 'Add new features', description: '' },
					{ title: 'bug fixing', description: '' },
					{ title: 'testing code', description: '' },
					{ title: 'deploying code', description: '' },
				],
			},
			{
				title: 'InProgress',
				tasks: [
					{ title: 'Add new features', description: '' },
					{ title: 'Login page', description: '' },
					{ title: 'api calls', description: '' },
				],
			},
			{
				title: 'Done',
				tasks: [
					{ title: 'state management', description: '' },
					{ title: 'Register Page', description: '' },
					{ title: 'landing page', description: '' },
					{ title: 'register and login api', description: '' },
					{ title: 'responsive website', description: '' },
				],
			},
		],
		dragging: false,
	};

	const [state, dispatch] = useReducer(KanbanReducer, initialState);

	const setList = (list) => {
		dispatch({ type: SET_LIST, list: list });
	};
	const setDragging = () => {
		dispatch({ type: SET_DRAGGING });
	};

	return (
		<KanbanContext.Provider
			value={{
				list: state.list,
				dragging: state.dragging,
				setDragging,
				setList,
			}}>
			{props.children}
		</KanbanContext.Provider>
	);
};

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
					'Add new features',
					'bug fixing',
					'testing code',
					'deploying code',
				],
			},
			{ title: 'InProgress', tasks: ['Login page', 'api calls'] },
			{
				title: 'Done',
				tasks: [
					'state management',
					'Register Page',
					'landing page',
					'register and login api',
					'responsive website',
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

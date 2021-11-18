import { createContext, useReducer } from 'react';
import KanbanReducer from '../reducer/KanbanReducer';
import { resizeAllGridItems } from '../resize';

export const KanbanContext = createContext();

export const KanbanState = (props) => {
	const initialState = {
		List: new Set(),
	};

	const [state, dispatch] = useReducer(KanbanReducer, initialState);

	const addNote = (note) => {
		setTimeout(() => {
			resizeAllGridItems();
		}, 100);
		dispatch({ type: 'ADDNOTE', payload: note });
	};

	// const removeKanban = (Kanban) => {
	// 	dispatch({ type: 'REMOVEKanban', payload: Kanban });
	// };

	return (
		<KanbanContext.Provider
			value={{
				List: state.List,
				addNote,
			}}>
			{props.children}
		</KanbanContext.Provider>
	);
};

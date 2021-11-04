import { createContext, useReducer } from 'react';
import NotesReducer from '../reducer/NotesReducer';
import { resizeAllGridItems } from '../resize';

export const NotesContext = createContext();

export const NotesState = (props) => {
	const initialState = {
		List: new Set(),
	};

	const [state, dispatch] = useReducer(NotesReducer, initialState);

	const addNote = (note) => {
		resizeAllGridItems();
		setTimeout(() => {}, 100);
		dispatch({ type: 'ADDNOTE', payload: note });
	};

	// const removeNotes = (Notes) => {
	// 	dispatch({ type: 'REMOVENotes', payload: Notes });
	// };

	return (
		<NotesContext.Provider
			value={{
				List: state.List,
				addNote,
			}}>
			{props.children}
		</NotesContext.Provider>
	);
};

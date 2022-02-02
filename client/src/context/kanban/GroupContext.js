import { createContext, useReducer } from 'react';
import GroupReducer from '../../reducer/kanban/GroupReducer';
// import { SET_DRAGGING, SET_LIST } from '../types';

export const GroupContext = createContext();

export const GroupState = (props) => {
	const initialState = {
		Form: { opened: false, for: 'add' },
	};

	const [state, dispatch] = useReducer(GroupReducer, initialState);

	return (
		<GroupContext.Provider
			value={{
				Form: state.Form,
				dispatch
			}}>
			{props.children}
		</GroupContext.Provider>
	);
};

const NotesReducer = (state, action) => {
	switch (action.type) {
		case 'ADDNOTE': {
			state.List.add(action.payload);
			return {
				...state,
			};
		}
		case 'REMOVENOTE': {
			state.List.delete(action.payload);
			return {
				...state,
			};
		}
		default: {
			return state;
		}
	}
};

export default NotesReducer;

const NotesReducer = (state, action) => {
	switch (action.type) {
		case 'ADDNOTE': {
			state.List.add({
				text: action.payload,
				index: state.List.size + 1,
			});
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

const initialState = {
	List: new Set(),
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADDTODO': {
			state.List.add({
				name: action.payload,
				index: state.List.size + 1,
				done: false,
			});
			return {
				...state,
			};
		}
		case 'REMOVETODO': {
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

export default todoReducer;

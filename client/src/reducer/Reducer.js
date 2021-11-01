const Reducer = (state, action) => {
	console.log(state);
	switch (action.type) {
		case 'ADDTODO': {
			state.List.add({
				name: action.payload,
				index: state.List.length,
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
			return {
				...state,
			};
		}
	}
};

export default Reducer;

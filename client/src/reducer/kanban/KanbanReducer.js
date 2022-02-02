import { SET_DRAGGING, SET_LIST } from '../../context/types';

const KanbanReducer = (state, action) => {
	switch (action.type) {
		case SET_LIST: {
			return {
				...state,
				list: action.list(state.list),
			};
		}
		case SET_DRAGGING: {
			return {
				...state,
				dragging: !state.dragging,
			};
		}
		default:
			return state;
	}
};

export default KanbanReducer;

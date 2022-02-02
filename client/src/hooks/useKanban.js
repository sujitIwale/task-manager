import { useContext } from 'react';
import { KanbanContext } from '../context/kanban/KanbanContext';

export const useKanban = () => {
	const kanbanContext = useContext(KanbanContext);
	return kanbanContext;
};

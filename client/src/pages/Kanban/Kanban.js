import React, { Fragment } from 'react';
import KanbanBoard from '../../components/Kanban/KanbanBoard';
import { KanbanState } from '../../context/kanban/KanbanContext';

const Kanban = () => {
	return (
		<Fragment>
			<KanbanState>
				<KanbanBoard />
			</KanbanState>
		</Fragment>
	);
};

export default Kanban;

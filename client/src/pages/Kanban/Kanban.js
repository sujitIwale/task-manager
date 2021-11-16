import React, { Fragment } from 'react';
import KanbanBoard from '../../components/Kanban/KanbanBoard';

const Kanban = () => {
	const kanbanGroups = [
		{ title: 'Todo', tasks: ['1', '2', '3', '1', '2'] },
		{ title: 'Doing', tasks: ['6'] },
		{ title: 'Pending', tasks: ['6'] },
		{ title: 'Done', tasks: ['4', '5'] },
	];
	return (
		<Fragment>
			<KanbanBoard data={kanbanGroups} />
		</Fragment>
	);
};

export default Kanban;

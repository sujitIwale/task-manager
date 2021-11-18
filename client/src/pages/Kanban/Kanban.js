import React, { Fragment } from 'react';
import KanbanBoard from '../../components/Kanban/KanbanBoard';

const Kanban = () => {
	const kanbanGroups = [
		{ title: 'Todo', tasks: [] },
		{ title: 'InProgress', tasks: [] },
		{ title: 'Pending', tasks: [] },
		{ title: 'Done', tasks: [] },
	];
	return (
		<Fragment>
			<KanbanBoard data={kanbanGroups} />
		</Fragment>
	);
};

export default Kanban;

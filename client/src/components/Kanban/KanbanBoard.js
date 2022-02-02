import React, { useRef } from 'react';
import { GroupState } from '../../context/kanban/GroupContext';
import { useKanban } from '../../hooks/useKanban';
import Group from './Group/Group';
import './KanbanBoard.css';
import NewGroup from './NewGroup/NewGroup';

const KanbanBoard = () => {
	const { list } = useKanban();
	// const [dragging, setDragging] = useState(false);
	const dragItem = useRef();
	const dragItemNode = useRef();
	return (
		<div className='kanban-main'>
			<div className='kanban-board customized-scrollbar'>
				<GroupState>
					{list.map((group, groupIndex) => (
						<Group
							key={groupIndex}
							group={group}
							groupIndex={groupIndex}
							dragItem={dragItem}
							dragItemNode={dragItemNode}
						/>
					))}
					<NewGroup />
				</GroupState>
			</div>
		</div>
	);
};

export default KanbanBoard;

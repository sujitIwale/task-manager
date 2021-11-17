import React, { useRef, useState } from 'react';
import Group from './Group/Group';
import './KanbanBoard.css';

const KanbanBoard = ({ data }) => {
	const [list, setList] = useState(data);
	const [dragging, setDragging] = useState(false);
	const dragItem = useRef();
	const dragItemNode = useRef();
	// console.log('kanban');
	return (
		<div className='kanban-main'>
			<div className='kanban-board'>
				{list.map((group, groupIndex) => (
					<Group
						key={groupIndex}
						group={group}
						groupIndex={groupIndex}
						setList={setList}
						dragging={dragging}
						setDragging={setDragging}
						dragItem={dragItem}
						dragItemNode={dragItemNode}
					/>
				))}
			</div>
		</div>
	);
};

export default KanbanBoard;

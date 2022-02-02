import React from 'react';
import Item from '../Item/Item';

const ItemList = ({
	group,
	groupIndex,
	dragStartHandler,
	dragEnterHandler,
	dragging,
	getStyles,
	openTask,
}) => {
	return (
		<div className='kanban-task-container scrollbar'>
			{group.tasks.map((task, taskIndex) => (
				<Item
					key={taskIndex}
					task={task}
					groupIndex={groupIndex}
					taskIndex={taskIndex}
					dragStartHandler={dragStartHandler}
					dragEnterHandler={dragEnterHandler}
					dragging={dragging}
					getStyles={getStyles}
					openTask={openTask}
				/>
			))}
		</div>
	);
};

export default ItemList;

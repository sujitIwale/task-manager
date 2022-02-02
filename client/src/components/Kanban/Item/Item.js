import React from 'react';

const Item = ({
	task,
	groupIndex,
	taskIndex,
	dragStartHandler,
	dragEnterHandler,
	dragging,
	getStyles,
	openTask,
}) => {
	return (
		<div
			draggable
			onClick={() => openTask(task, groupIndex, taskIndex)}
			onDragStart={(e) =>
				dragStartHandler(e, {
					groupIndex,
					taskIndex,
				})
			}
			onDragEnter={
				dragging
					? (e) => {
							dragEnterHandler(e, {
								groupIndex,
								taskIndex,
							});
					  }
					: null
			}
			key={taskIndex}
			className={
				dragging ? getStyles({ groupIndex, taskIndex }) : 'kanban-item'
			}>
			<div className='task-container'>
				<h3>{task.title}</h3>
			</div>
		</div>
	);
};

export default Item;

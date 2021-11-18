import React from 'react';

const Item = ({
	task,
	groupIndex,
	taskIndex,
	dragStartHandler,
	dragEnterHandler,
	dragging,
	getStyles,
}) => {
	return (
		<div
			draggable
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
				<h2>{task.title}</h2>
				<p>{task.description}</p>
			</div>
		</div>
	);
};

export default Item;

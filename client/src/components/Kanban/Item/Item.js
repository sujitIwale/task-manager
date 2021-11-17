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
			<h2>{task}</h2>
		</div>
	);
};

export default Item;

import React, { useRef, useState } from 'react';
import './KanbanBoard.css';

const KanbanBoard = ({ data }) => {
	const [list, setList] = useState(data);
	const [dragging, setDragging] = useState(false);

	const dragItem = useRef();
	const dragItemNode = useRef();

	const dragStartHandler = (e, item) => {
		console.log('Starting to drag', item);

		dragItemNode.current = e.target;
		dragItemNode.current.addEventListener('dragend', dragEndHandler);
		dragItem.current = item;

		setTimeout(() => {
			setDragging(true);
		}, 0);
	};

	const dragEndHandler = (e) => {
		setDragging(false);
		dragItem.current = null;
		dragItemNode.current.removeEventListener('dragend', dragEndHandler);
		dragItemNode.current = null;
	};
	const dragEnterHandler = (e, targetItem) => {
		if (dragItemNode.current !== e.target) {
			setList((oldList) => {
				let newList = JSON.parse(JSON.stringify(oldList));
				newList[targetItem.groupIndex].tasks.splice(
					targetItem.taskIndex,
					0,
					newList[dragItem.current.groupIndex].tasks.splice(
						dragItem.current.taskIndex,
						1
					)[0]
				);
				dragItem.current = targetItem;
				localStorage.setItem('List', JSON.stringify(newList));
				return newList;
			});
		}
	};
	const getStyles = (item) => {
		if (
			dragItem.current.groupIndex === item.groupIndex &&
			dragItem.current.taskIndex === item.taskIndex
		) {
			return 'kanban-item current';
		}
		return 'kanban-item';
	};
	return (
		<div className='kanban-main'>
			<div className='kanban-board'>
				{list.map((group, groupIndex) => (
					<div
						key={groupIndex}
						className={`kanban-group ${group.title}`}
						onDragEnter={
							dragging && !group.tasks.length
								? (e) =>
										dragEnterHandler(e, {
											groupIndex,
											taskIndex: 0,
										})
								: null
						}>
						<div className={`group-title ${group.title}`}>
							<h3>{group.title}</h3>
						</div>
						{group.tasks.map((task, taskIndex) => (
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
									dragging
										? getStyles({ groupIndex, taskIndex })
										: 'kanban-item'
								}>
								<h2>{task}</h2>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default KanbanBoard;

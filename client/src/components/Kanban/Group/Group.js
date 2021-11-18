import React, { useState } from 'react';
import Modal from '../../Shared/Modal/Modal';
import Item from '../Item/Item';

const Group = ({
	setList,
	groupIndex,
	group,
	dragging,
	setDragging,
	dragItem,
	dragItemNode,
}) => {
	console.log('Group');
	const [Form, setForm] = useState(false);
	const dragStartHandler = (e, item) => {
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
			<div className='add-button' onClick={() => setForm(!Form)}>
				<i class='fas fa-plus'></i>
				<label>Add</label>
			</div>
			{Form && (
				<Modal closeModal={() => setForm(!Form)}>
					<form className='todo-form'>
						<input
							type='text'
							// onChange={changeHandler}
							// value={Task}
							placeholder="Add Todo's"
						/>
						<button type='submit' className='pointer'>
							Add
						</button>
					</form>
				</Modal>
			)}
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
				/>
			))}
		</div>
	);
};

export default Group;

import React, { useRef, useState } from 'react';
import Modal from '../../Shared/Modal/Modal';
import AddForm from '../AddForm/AddForm';
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
	const [Form, setForm] = useState({ opened: false, for: 'add' });
	const taskUpdate = useRef();
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

	const updateTask = (task, groupInd, taskInd) => {
		console.log('task', taskInd);
		setList((oldList) => {
			let newList = JSON.parse(JSON.stringify(oldList));
			newList[groupInd].tasks.splice(taskInd, 1, task);
			return newList;
		});
		setForm({ opened: false, for: 'add' });
	};

	const getModalComponent = () => {
		if (Form.for === 'add')
			return (
				<AddForm
					groupIndex={groupIndex}
					addTask={addTask}
					type={Form.for}
				/>
			);
		else if (Form.for === 'update') {
			return (
				<AddForm
					groupIndex={taskUpdate.current.groupIndex}
					taskIndex={taskUpdate.current.taskIndex}
					task={taskUpdate.current.task}
					updateTask={updateTask}
					type={Form.for}
				/>
			);
		}
	};
	const addTask = (task, groupInd) => {
		setList((oldList) => {
			let newList = JSON.parse(JSON.stringify(oldList));
			newList[groupInd].tasks.push(task);
			return newList;
		});
		setForm({ opened: false, for: 'add' });
	};
	const openTask = (task, groupInd, taskInd) => {
		taskUpdate.current = {};
		taskUpdate.current.task = task;
		taskUpdate.current.groupIndex = groupInd;
		taskUpdate.current.taskIndex = taskInd;
		setForm({ opened: true, for: 'update' });
	};
	return (
		<div
			key={groupIndex}
			className={`kanban-group`}
			onDragEnter={
				dragging && !group.tasks.length
					? (e) =>
							dragEnterHandler(e, {
								groupIndex,
								taskIndex: 0,
							})
					: null
			}>
			<div className='kanban-group-header'>
				<div className={`group-title ${group.title}`}>
					<h3>{group.title}</h3>
				</div>
				<div
					className='add-button'
					onClick={() => setForm({ opened: true, for: 'add' })}>
					<i className='fas fa-plus'></i>
					<span>Add</span>
				</div>
			</div>
			{Form.opened && (
				<Modal
					closeModal={() => setForm({ opened: false, for: 'add' })}>
					{getModalComponent()}
				</Modal>
			)}
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
						onClick={openTask}
					/>
				))}
			</div>
		</div>
	);
};

export default Group;

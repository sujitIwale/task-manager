import React, { useRef, useState } from 'react';
import Modal from '../../Shared/Modal/Modal';
import AddForm from '../AddForm/AddForm';
import './Group.css';
import { useKanban } from '../../../hooks/useKanban';
import ItemList from '../ItemList/ItemList';
import GroupHeader from '../GroupHeader/GroupHeader';

const Group = ({ groupIndex, group, dragItem, dragItemNode }) => {
	const { setList, dragging, setDragging } = useKanban();
	const [Form, setForm] = useState({ opened: false, for: 'add' });
	const taskUpdate = useRef();

	// drag events
	const dragStartHandler = (e, item) => {
		console.log('drag start');
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
	// styles for the group title
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
		// setTimeout(() => {
		// 	const container = document.querySelectorAll(
		// 		'.kanban-task-container'
		// 	);
		// 	container[groupInd].scrollTop = container[groupInd].scrollHeight;
		// }, 100);

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
			<GroupHeader
				group={group}
				setList={setList}
				groupIndex={groupIndex}
				setForm={setForm}
			/>
			{Form.opened && (
				<Modal
					closeModal={() => setForm({ opened: false, for: 'add' })}>
					{getModalComponent()}
				</Modal>
			)}
			<ItemList
				group={group}
				groupIndex={groupIndex}
				dragStartHandler={dragStartHandler}
				dragEnterHandler={dragEnterHandler}
				dragging={dragging}
				getStyles={getStyles}
				openTask={openTask}
			/>
		</div>
	);
};

export default Group;

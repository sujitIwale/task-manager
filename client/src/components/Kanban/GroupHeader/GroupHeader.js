import React from 'react';
import GroupTitle from '../GroupTitle/GroupTitle';

const GroupHeader = ({ group, setList, groupIndex, setForm }) => {
	return (
		<div className='kanban-group-header'>
			<GroupTitle
				title={group.title}
				setList={setList}
				groupIndex={groupIndex}
			/>
			<div
				className='add-button'
				onClick={() => setForm({ opened: true, for: 'add' })}>
				<i className='fas fa-plus'></i>
				<span>Add</span>
			</div>
		</div>
	);
};

export default GroupHeader;

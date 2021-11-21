import React, { useCallback, useState } from 'react';

const GroupTitle = ({ title, setList, groupIndex }) => {
	const [Title, setTitle] = useState(title);
	const changeGroupTitle = useCallback(
		(e) => {
			if (title === e.target.value) {
				return;
			} else if (e.target.value === '') {
				setTitle(title);
				return;
			}
			setList((oldList) => {
				let newList = JSON.parse(JSON.stringify(oldList));
				newList[groupIndex].title = e.target.value;
				return newList;
			});
		},
		[title, groupIndex, setList]
	);

	const changeHandler = (e) => {
		setTitle(e.target.value);
	};
	return (
		<div className={`group-title ${title}`}>
			<input
				type='text'
				value={Title}
				onChange={changeHandler}
				className='group-title-input'
				onBlur={changeGroupTitle}
			/>
		</div>
	);
};

export default GroupTitle;

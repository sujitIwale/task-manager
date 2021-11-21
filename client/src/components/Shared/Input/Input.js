import React, { useState } from 'react';

const Input = ({ type, value = '', placeholder, className, onBlur }) => {
	const [Value, setValue] = useState(value);
	const changeHandler = (e) => {
		setValue(e.target.value);
	};
	return (
		<input
			type={type}
			value={Value}
			onChange={changeHandler}
			placeholder={placeholder}
			className={className}
			onBlur={onBlur}
		/>
	);
};

export default Input;

import React from 'react';

const CheckBox = (context) => {
	const { actions, data } = context;
	const { completed } = data;

	return (
		<input
			type="checkbox"
			checked={ completed }
			onChange={ () => actions.toggleTodo(data) }
		/>);
};

export default CheckBox;

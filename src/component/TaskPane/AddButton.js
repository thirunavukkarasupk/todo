import React from 'react';

const AddButton = (context) => {
	const { actions, data } = context;

	return (
		<button
			onClick={ () => {
				actions.removeTask(data);
				actions.addTaskToTodo(data);
			} }
		>
			+
		</button>);
};

export default AddButton;

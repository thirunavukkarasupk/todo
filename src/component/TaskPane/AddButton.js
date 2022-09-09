import React from 'react';

const AddButton = (context) => {
	const { actions, data } = context;

	return (
		<button
			role="addButton"
			onClick={ () => {
				actions.removeTask(data);
				actions.addTaskToTodo(data);
			} }
		>
			+
		</button>);
};

export default AddButton;

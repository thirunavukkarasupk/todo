import React from 'react';

const EditButton = (context) => {
	const { state, actions } = context;
	const { editing } = state;

	return (
		<button
			disabled={ editing === null }
			onClick={ () => actions.editTodo(state) }
		>Edit</button>);
};

export default EditButton;

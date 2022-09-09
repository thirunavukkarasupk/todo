import React from 'react';
import TodoManager from '../../services/TodoManager';

const EditButton = (context) => {
	const { actions, state: { editing }} = context;

	return (
		<button
			role="editTodo"
			disabled={ TodoManager.isEditingNull(editing) }
			onClick={ () => actions.editTodo() }
		>Edit</button>);
};

export default EditButton;

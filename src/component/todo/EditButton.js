import React from 'react';
import TodoManager from '../../services/TodoManager';

const EditButton = (context) => {
	const { actions, state: { editing }} = context;

	return (
		<button
			disabled={ TodoManager.isEditingNull(editing) }
			onClick={ () => actions.editTodo() }
		>Edit</button>);
};

export default EditButton;

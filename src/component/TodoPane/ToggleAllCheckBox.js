/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import TodoManager from '../../services/TodoManager';

const ToggleAll = (context) => {
	const { actions, state: { todoList }} = context;

	return !TodoManager.noTodoList(todoList)
		&& <input
			role="toggleAll"
			type="checkbox"
			checked={ TodoManager.isAllChecked(todoList) }
			onChange={ () => actions
				.toggleAll(!TodoManager.isAllChecked(todoList)) }
		   />
	;
};

export default ToggleAll;

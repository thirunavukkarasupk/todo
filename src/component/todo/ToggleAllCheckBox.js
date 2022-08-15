/* eslint-disable no-mixed-spaces-and-tabs */

import React from 'react';
import TodoManager from '../../services/TodoManager';

const ToggleAll = (context) => {
	const { actions, state: { todoList }} = context;
	const isAllChecked = TodoManager.getCountOfActiveTask(todoList) === 0;
	const noTodoList = TodoManager.getCountOfTodoList(todoList) === 0;

	return !noTodoList
		&& <input
			type="checkbox"
			checked={ isAllChecked }
			onChange={ () => actions.toggleAll(!isAllChecked) }
		   />
	;
};

export default ToggleAll;

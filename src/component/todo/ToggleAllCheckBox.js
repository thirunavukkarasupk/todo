/* eslint-disable no-mixed-spaces-and-tabs */

import React from 'react';
import TodoManager from '../../services/TodoManager';

const ToggleAll = (context) => {
	const { actions, state: { todoList }} = context;
	const isChecked = TodoManager.getCountOfActiveTask(todoList) === 0;
	const noTodoList = TodoManager.getCountOfTodoList(todoList) === 0;

	return !noTodoList
		&& <input
			type="checkbox"
			checked={ isChecked }
			onChange={ () => actions.toggleAll(!isChecked) }
		   />
	;
};

export default ToggleAll;

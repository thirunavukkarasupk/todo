/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import TodoManager from '../../services/TodoManager';

const ClearButton = (context) => {
	const { actions, state: { todoList }} = context;
	const noCompletedTodo = TodoManager.getCompletedTodo(todoList);

	return noCompletedTodo
		&& <button
			onClick={ () => actions.clearButton(todoList) }
		   >ClearCompletedTasks
		</button>;
};

export default ClearButton;

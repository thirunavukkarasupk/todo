/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import TodoManager from '../../services/TodoManager';

const ClearButton = (context) => {
	const { actions, state: { todoList }} = context;
	const CompletedTodo = TodoManager.getCompletedTodo(todoList).length > 0;

	return CompletedTodo
		&& <button
			onClick={ () => actions.clearButton(todoList) }
		   >ClearCompletedTasks
		</button>;
};

export default ClearButton;

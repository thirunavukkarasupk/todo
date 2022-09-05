/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import TodoManager from '../../services/TodoManager';

const ClearButton = (context) => {
	const { actions, state: { todoList }} = context;
	const CompletedTodo = TodoManager
		.filterTodos(todoList, 'completed').length > 0;

	return CompletedTodo
		&& <button
			className="clearButton"
			onClick={ () => actions.clearButton() }
		   >ClearCompletedTasks
		</button>;
};

export default ClearButton;

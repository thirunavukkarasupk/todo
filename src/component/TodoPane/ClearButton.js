/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import TodoManager from '../../services/TodoManager';

const ClearButton = (context) => {
	const { actions, state: { todoList }} = context;

	return TodoManager.isCompletedAboveZero(todoList)
		&& <button
			className="clearButton"
			role="clearButton"
			onClick={ () => actions.clearButton() }
		   >ClearCompletedTasks
		</button>;
};

export default ClearButton;

import React from 'react';
import TodoManager from '../../services/TodoManager';

const FilterButton = (context) => {
	const { actions, state: { todoList }, data: filter } = context;
	const noTodoList = TodoManager.getCountOfTodoList(todoList) === 0;

	return !noTodoList
		&& <button
			onClick={ () => actions.filterButton(filter) }
			// eslint-disable-next-line no-mixed-spaces-and-tabs
		   >
			{ filter }
		</button>;
};

export default FilterButton;

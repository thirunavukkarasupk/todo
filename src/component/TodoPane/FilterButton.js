import React from 'react';
import TodoManager from '../../services/TodoManager';

const FilterButton = (context) => {
	const { actions, state: { todoList }, data: filter } = context;

	return !TodoManager.noTodoList(todoList)
		&& <button
			onClick={ () => actions.filterButton(filter) }
			// eslint-disable-next-line no-mixed-spaces-and-tabs
		   >
			{ filter }
		</button>;
};

export default FilterButton;

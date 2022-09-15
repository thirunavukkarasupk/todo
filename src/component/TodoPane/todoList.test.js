import { render } from '@testing-library/react';
import TodoList from './TodoList';
import * as Todo from './Todo';
import TodoManager from '../../services/TodoManager';
import React from 'react';
import { range } from '@laufire/utils/collection';
import { rndBetween, rndString } from '@laufire/utils/random';

test('todoList', () => {
	const context = {
		state: {
			todoList: Symbol('todoList'),
			filter: Symbol('filter'),
		},
	};
	const filteredTodos = range(1, rndBetween(Number('2'),
		Number('4'))).map(() => ({ id: rndString() }));

	jest.spyOn(TodoManager, 'filterTodos')
		.mockReturnValue(filteredTodos);

	jest.spyOn(Todo, 'default')
		.mockReturnValue(<div role="todo "/>);

	const { getAllByRole } = render(TodoList(context));

	expect(TodoManager.filterTodos)
		.toHaveBeenCalledWith(context.state.todoList, context.state.filter);

	filteredTodos.map((todo, index) => {
		expect(getAllByRole('todoList')[index]).toBeInTheDocument();
		expect(getAllByRole('todoList')[index]).toHaveClass('todo-div');
		expect(Todo.default)
			.toHaveBeenCalledWith({ ...context, data: todo }, {});
		expect(getAllByRole('todo')[index]).toBeInTheDocument();
	});
});

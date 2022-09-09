import { render, fireEvent } from '@testing-library/react';
import TodoManager from '../../services/TodoManager';
import FilterButton from './FilterButton';

describe('filterButton', () => {
	const context = {
		actions: { filterButton: jest.fn() },
		state: { todoList: Symbol('todoList') },
		data: Symbol('data'),
	};

	test('when there is nothing in the todoList', () => {
		jest.spyOn(TodoManager, 'noTodoList').mockReturnValue(false);

		FilterButton(context);

		expect(TodoManager.noTodoList)
			.toHaveBeenCalledWith(context.state.todoList);
	});

	describe('when there are todos in the todoList', () => {
		test('displaying the filter', () => {
			jest.spyOn(TodoManager, 'noTodoList').mockReturnValue(false);

			const component = render(FilterButton(context))
				.getByRole('filterButton');

			expect(component).toBeInTheDocument();
			expect(TodoManager.noTodoList)
				.toHaveBeenCalledWith(context.state.todoList);
		});
	});

	test('on clicking the FilterButton', () => {
		jest.spyOn(TodoManager, 'noTodoList').mockReturnValue(false);

		const component = render(FilterButton(context))
			.getByRole('filterButton');

		fireEvent.click(component);

		expect(context.actions.filterButton).toHaveBeenCalledWith(context.data);
	});
});

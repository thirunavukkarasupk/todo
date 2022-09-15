import { render, fireEvent } from '@testing-library/react';
import TodoManager from '../../services/TodoManager';
import ToggleAll from './ToggleAllCheckBox';

describe('toggle all', () => {
	const context = {
		actions: { toggleAll: jest.fn() },
		state: { todoList: Symbol('todoList') },
	};

	test('when there is nothing in the todoList', () => {
		jest.spyOn(TodoManager, 'noTodoList').mockReturnValue(true);

		ToggleAll(context);

		expect(TodoManager.noTodoList)
			.toHaveBeenCalledWith(context.state.todoList);
	});

	describe('when todos are there in the todoList', () => {
		test('displaying the toggleAll', () => {
			jest.spyOn(TodoManager, 'noTodoList').mockReturnValue(false);
			jest.spyOn(TodoManager, 'isAllChecked').mockReturnValue(true);

			const component = render(ToggleAll(context)).getByRole('toggleAll');

			expect(component.checked).toEqual(true);

			expect(component).toBeInTheDocument();
			expect(TodoManager.noTodoList)
				.toHaveBeenCalledWith(context.state.todoList);
		});

		test('on clicking the toggleAll,when all the todos are checked', () => {
			jest.spyOn(TodoManager, 'noTodoList').mockReturnValue(false);
			jest.spyOn(TodoManager, 'isAllChecked').mockReturnValue(true);

			const component = render(ToggleAll(context)).getByRole('toggleAll');

			fireEvent.click(component);

			expect(context.actions.toggleAll).toHaveBeenCalledWith(false);
			expect(TodoManager.noTodoList)
				.toHaveBeenCalledWith(context.state.todoList);
			expect(TodoManager.isAllChecked)
				.toHaveBeenCalledWith(context.state.todoList);
		});

		test('on clicking the toggleAll,when all the todos are not checked',
			() => {
				jest.spyOn(TodoManager, 'noTodoList').mockReturnValue(false);
				jest.spyOn(TodoManager, 'isAllChecked').mockReturnValue(false);

				const component = render(ToggleAll(context))
					.getByRole('toggleAll');

				fireEvent.click(component);

				expect(context.actions.toggleAll).toHaveBeenCalledWith(true);
				expect(TodoManager.noTodoList)
					.toHaveBeenCalledWith(context.state.todoList);
			});
	});
});

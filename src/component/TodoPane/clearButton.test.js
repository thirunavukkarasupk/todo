import ClearButton from './ClearButton';
import { render, fireEvent } from '@testing-library/react';
import TodoManager from '../../services/TodoManager';

describe('clearButton', () => {
	const context = {
		actions: { clearButton: jest.fn() },
		state: { todoList: Symbol('todoList') },
	};

	test('isCompletedTodos Not Zero', () => {
		jest.spyOn(TodoManager, 'isCompletedAboveZero').mockReturnValue(false);

		ClearButton(context);

		expect(TodoManager.isCompletedAboveZero)
			.toHaveBeenCalledWith(context.state.todoList);
	});

	describe('isCompletedTodos is Zero', () => {
		test('displays clearButton', () => {
			jest.spyOn(TodoManager, 'isCompletedAboveZero')
				.mockReturnValue(true);

			const component = render(ClearButton(context))
				.getByRole('clearButton');

			expect(component).toBeInTheDocument();
			expect(TodoManager.isCompletedAboveZero)
				.toHaveBeenCalledWith(context.state.todoList);
		});

		test('on clicking the clear button', () => {
			jest.spyOn(TodoManager, 'isCompletedAboveZero')
				.mockReturnValue(true);
			const component = render(ClearButton(context))
				.getByRole('clearButton');

			fireEvent.click(component);

			expect(context.actions.clearButton).toHaveBeenCalledWith();
			expect(TodoManager.isCompletedAboveZero)
				.toHaveBeenCalledWith(context.state.todoList);
		});
	});
});

import EditButton from './EditButton';
import { render, fireEvent } from '@testing-library/react';
import TodoManager from '../../services/TodoManager';

describe('editButton', () => {
	const context = {
		actions: { editTodo: jest.fn() },
		state: { editing: null },
	};

	test('displays editButton', () => {
		const component = render(EditButton(context)).getByRole('editTodo');

		expect(component).toBeInTheDocument();
	});

	describe('on clicking the editButton', () => {
		test('when editButton is disabled', () => {
			jest.spyOn(TodoManager, 'isEditingNull').mockReturnValue(true);

			const component = render(EditButton(context)).getByRole('editTodo');

			expect(component).toBeDisabled();

			expect(TodoManager.isEditingNull)
				.toHaveBeenCalledWith(context.state.editing);
		});

		test('when EditButton is Enabled', () => {
			jest.spyOn(TodoManager, 'isEditingNull').mockReturnValue(false);

			const component = render(EditButton(context)).getByRole('editTodo');

			fireEvent.click(component);

			expect(component).not.toBeDisabled();
			expect(context.actions.editTodo).toHaveBeenCalledWith();
			expect(TodoManager.isEditingNull)
				.toHaveBeenCalledWith(context.state.editing);
		});
	});
});

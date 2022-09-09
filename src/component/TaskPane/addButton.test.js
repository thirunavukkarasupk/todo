import { render, fireEvent } from '@testing-library/react';
import AddButton from './AddButton';

describe('addbutton', () => {
	const context = {
		actions: {
			removeTask: jest.fn(),
			addTaskToTodo: jest.fn(),
		},
		data: Symbol('data'),
	};

	test('displaying the addButton', () => {
		const component = render(AddButton(context)).getByRole('addButton');

		expect(component).toBeInTheDocument();
	});

	test('on clicking the addButton', () => {
		const component = render(AddButton(context)).getByRole('addButton');

		fireEvent.click(component);

		expect(context.actions.removeTask).toHaveBeenCalledWith(context.data);
		expect(context.actions.addTaskToTodo)
			.toHaveBeenCalledWith(context.data);
	});
});

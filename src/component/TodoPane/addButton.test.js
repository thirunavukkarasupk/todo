import AddButton from './AddButton';
import { render, fireEvent } from '@testing-library/react';

describe('addButton', () => {
	const context = {
		actions: { addTodo: jest.fn() },
		state: { input: Symbol('Input') },
	};

	test('addButton is in the document', () => {
		const component = render(AddButton(context)).getByRole('addButton');

		expect(component).toBeInTheDocument();
	});

	test('when clicking the addButton', () => {
		const component = render(AddButton(context)).getByRole('addButton');

		fireEvent.click(component);

		expect(context.actions.addTodo)
			.toHaveBeenCalledWith(context.state.input);
	});
});

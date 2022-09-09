import RemoveButton from './RemoveButton';
import { render, fireEvent } from '@testing-library/react';

describe('removeButton', () => {
	const context = {
		actions: { removeTodo: jest.fn() },
		data: Symbol('data'),
	};

	test('displays removeButton', () => {
		const component = render(RemoveButton(context)).getByRole('removeTodo');

		expect(component).toBeInTheDocument();
	});

	test('when Clicking the removeButton', () => {
		const component = render(RemoveButton(context)).getByRole('removeTodo');

		fireEvent.click(component);

		expect(context.actions.removeTodo).toHaveBeenCalledWith(context.data);
	});
});

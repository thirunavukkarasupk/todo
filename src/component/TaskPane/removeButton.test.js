import RemoveButton from './RemoveButton';
import { render, fireEvent } from '@testing-library/react';

describe('removeButton', () => {
	const context = {
		actions: {
			removeTask: jest.fn(),
		},
		data: Symbol('data'),
	};

	test('displaying the addButton', () => {
		const component = render(RemoveButton(context))
			.getByRole('removeButton');

		expect(component).toBeInTheDocument();
	});

	test('on clicking the addButton', () => {
		const component = render(RemoveButton(context))
			.getByRole('removeButton');

		fireEvent.click(component);

		expect(context.actions.removeTask).toHaveBeenCalledWith(context.data);
	});
});

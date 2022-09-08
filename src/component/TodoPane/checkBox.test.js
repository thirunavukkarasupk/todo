import { render, fireEvent } from '@testing-library/react';
import CheckBox from './CheckBox';

describe('CheckBox', () => {
	const context = {
		actions: { toggleTodo: jest.fn() },
		data: Symbol('data'),
	};

	test('displays checkBox', () => {
		const component = render(CheckBox(context)).getByRole('checkBox');

		expect(component).toBeInTheDocument();
	});

	test('when Clicking the Checkbox', () => {
		const component = render(CheckBox(context)).getByRole('checkBox');

		fireEvent.click(component);

		expect(context.actions.toggleTodo).toHaveBeenCalledWith(context.data);
	});
});

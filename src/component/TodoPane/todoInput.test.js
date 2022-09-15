import { rndString } from '@laufire/utils/random';
import { render, fireEvent } from '@testing-library/react';
import TodoInput from './TodoInput';

describe('todo input', () => {
	const context = {
		state: { input: rndString() },
		actions: {
			setInput: jest.fn(),
			addTodo: jest.fn(),
		},
	};

	test('displaying the input', () => {
		const component = render(TodoInput(context)).getByRole('todoInput');

		expect(component).toBeInTheDocument();
	});

	test('On changing the input value', () => {
		const value = rndString();
		const component = render(TodoInput(context)).getByRole('todoInput');

		fireEvent.change(component, { target: { value }});
		expect(context.actions.setInput).toHaveBeenCalledWith(value);
	});

	test('when the action key is neither enter nor escape', () => {
		const code = rndString();
		const component = render(TodoInput(context)).getByRole('todoInput');

		fireEvent.keyUp(component, { code });

		expect(context.actions.setInput).not.toHaveBeenCalledWith(context);
		expect(context.actions.addTodo).not.toHaveBeenCalledWith(context);
	});

	test('when the action key is enter ', () => {
		const component = render(TodoInput(context)).getByRole('todoInput');

		fireEvent.keyUp(component, { code: 'Enter' });
		expect(context.actions.addTodo)
			.toHaveBeenCalledWith(context.state.input);
	});

	test('when the action key is escape', () => {
		const component = render(TodoInput(context)).getByRole('todoInput');

		fireEvent.keyUp(component, { code: 'Escape' });
		expect(context.actions.setInput)
			.toHaveBeenCalledWith('');
	});
});

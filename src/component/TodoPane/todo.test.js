import Todo from './Todo';
import React from 'react';
import * as CheckBox from './CheckBox';
import * as RemoveButton from './RemoveButton';
import { render, fireEvent } from '@testing-library/react';

describe('todo', () => {
	test('when the completed is false', () => {
		const context = {
			state: { editing: null },
			data: {
				todo: Symbol('todo'),
				completed: false,
				mode: 'edit-active',
			},
			actions: { setEditing: jest.fn() },
		};

		jest.spyOn(CheckBox, 'default').mockReturnValue(<div role="checkBox"/>);
		jest.spyOn(RemoveButton, 'default')
			.mockReturnValue(<div role="removeButton"/>);

		const { getByRole } = render(Todo(context));

		fireEvent.click(getByRole('todoText'));

		expect(getByRole('todo')).toBeInTheDocument();
		expect(getByRole('todo')).toHaveClass('todo-active');
		expect(getByRole('todoText')).toHaveClass(context.data.mode);

		expect(context.actions.setEditing).toHaveBeenCalledWith(context.data);
		expect(CheckBox.default).toHaveBeenCalledWith(context, {});
		expect(RemoveButton.default).toHaveBeenCalledWith(context, {});
	});

	test('when the completed is true', () => {
		const context = {
			state: { editing: null },
			data: {
				todo: Symbol('todo'),
				completed: true,
				mode: 'edit-active',
			},
			actions: { setEditing: jest.fn() },
		};

		jest.spyOn(CheckBox, 'default').mockReturnValue(<div role="checkBox"/>);
		jest.spyOn(RemoveButton, 'default')
			.mockReturnValue(<div role="removeButton"/>);

		const { getByRole } = render(Todo(context));

		fireEvent.click(getByRole('todoText'));

		expect(getByRole('todo')).toBeInTheDocument();
		expect(getByRole('todo')).toHaveClass('todo-completed');
		expect(getByRole('todoText')).toHaveClass(context.data.mode);

		expect(context.actions.setEditing).toHaveBeenCalledWith(context.data);
		expect(CheckBox.default).toHaveBeenCalledWith(context, {});
		expect(RemoveButton.default).toHaveBeenCalledWith(context, {});
	});
});

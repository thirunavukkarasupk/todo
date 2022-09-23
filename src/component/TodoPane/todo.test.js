import Todo from './Todo';
import React from 'react';
import * as CheckBox from './CheckBox';
import * as RemoveButton from './RemoveButton';
import { render, fireEvent } from '@testing-library/react';
import TodoManager from '../../services/TodoManager';

describe('todo', () => {
	test('when the completed is false', () => {
		const context = {
			state: { editing: null },
			data: {
				todo: Symbol('todo'),
				completed: false,
			},
			actions: { setEditing: jest.fn() },
		};

		jest.spyOn(CheckBox, 'default').mockReturnValue(<div role="checkBox"/>);
		jest.spyOn(RemoveButton, 'default')
			.mockReturnValue(<div role="removeButton"/>);
		jest.spyOn(TodoManager, 'getEditMode')
			.mockReturnValue('edit-inactive');

		const { getByRole } = render(Todo(context));

		fireEvent.click(getByRole('todoText'));

		expect(getByRole('todo')).toBeInTheDocument();
		expect(getByRole('todo')).toHaveClass('todo-active');

		expect(context.actions.setEditing).toHaveBeenCalledWith(context.data);
		expect(TodoManager.getEditMode).toHaveBeenCalledWith(context);
		expect(CheckBox.default).toHaveBeenCalledWith(context, {});
		expect(RemoveButton.default).toHaveBeenCalledWith(context, {});
	});

	test('when the completed is true', () => {
		const context = {
			state: { editing: null },
			data: {
				todo: Symbol('todo'),
				completed: true,
			},
			actions: { setEditing: jest.fn() },
		};

		jest.spyOn(CheckBox, 'default').mockReturnValue(<div role="checkBox"/>);
		jest.spyOn(RemoveButton, 'default')
			.mockReturnValue(<div role="removeButton"/>);
		jest.spyOn(TodoManager, 'getEditMode')
			.mockReturnValue('edit-inactive');

		const { getByRole } = render(Todo(context));

		fireEvent.click(getByRole('todoText'));

		expect(getByRole('todo')).toBeInTheDocument();
		expect(getByRole('todo')).toHaveClass('todo-completed');

		expect(context.actions.setEditing).toHaveBeenCalledWith(context.data);
		expect(TodoManager.getEditMode).toHaveBeenCalledWith(context);
		expect(CheckBox.default).toHaveBeenCalledWith(context, {});
		expect(RemoveButton.default).toHaveBeenCalledWith(context, {});
	});
});

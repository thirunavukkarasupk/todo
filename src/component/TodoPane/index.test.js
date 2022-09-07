import React from 'react';
import { render } from '@testing-library/react';
import TodoPane from './Index';
import * as TodoInput from './TodoInput';
import * as TodoList from './TodoList';
import * as ToggleAll from './ToggleAllCheckBox';
import * as ClearButton from './ClearButton';
import * as FilterBar from './FilterBar';
import * as ActionButton from './ActionButton';

test('todo pane index', () => {
	const context = { context: Symbol('context') };

	jest.spyOn(ToggleAll, 'default')
		.mockReturnValue(<div role="toggleAll"/>);

	jest.spyOn(TodoInput, 'default')
		.mockReturnValue(<div role="todoInput"/>);

	jest.spyOn(ActionButton, 'default')
		.mockReturnValue(<div role="actionButton"/>);

	jest.spyOn(TodoList, 'default')
		.mockReturnValue(<div role="todoList"/>);

	jest.spyOn(ClearButton, 'default')
		.mockReturnValue(<div role="clearButton"/>);

	jest.spyOn(FilterBar, 'default')
		.mockReturnValue(<div role="filterBar"/>);

	const { getByRole } = render(TodoPane(context));

	expect(getByRole('todoPane')).toBeInTheDocument();
	expect(getByRole('todoPane')).toHaveClass('todoPane');

	expect(getByRole('toggleAll')).toBeInTheDocument();
	expect(ToggleAll.default).toHaveBeenCalledWith(context, {});

	expect(getByRole('todoInput')).toBeInTheDocument();
	expect(TodoInput.default).toHaveBeenCalledWith(context, {});

	expect(getByRole('actionButton')).toBeInTheDocument();
	expect(ActionButton.default).toHaveBeenCalledWith(context, {});

	expect(getByRole('todoList')).toBeInTheDocument();
	expect(TodoList.default).toHaveBeenCalledWith(context, {});

	expect(getByRole('clearButton')).toBeInTheDocument();
	expect(ClearButton.default).toHaveBeenCalledWith(context, {});

	expect(getByRole('filterBar')).toBeInTheDocument();
	expect(FilterBar.default).toHaveBeenCalledWith(context, {});
});

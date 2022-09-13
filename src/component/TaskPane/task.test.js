import Task from './Task';
import React from 'react';
import * as AddButton from './AddButton';
import * as RemoveButton from './RemoveButton';
import { render } from '@testing-library/react';

test('task', () => {
	const context = { data: { task: Symbol('task') }};

	jest.spyOn(AddButton, 'default').mockReturnValue(<div role="addButton"/>);
	jest.spyOn(RemoveButton, 'default')
		.mockReturnValue(<div role="removeButton"/>);

	const component = render(Task(context)).getByRole('task');

	expect(component).toBeInTheDocument();
	expect(AddButton.default).toHaveBeenCalledWith(context, {});
	expect(RemoveButton.default).toHaveBeenCalledWith(context, {});
});

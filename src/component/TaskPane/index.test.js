import TaskPane from './Index';
import React from 'react';
import context from '../../core/context';
import { render } from '@testing-library/react';
import * as TaskList from './TaskList';

test('taskPane', () => {
	jest.spyOn(TaskList, 'default')
		.mockReturnValue(<div role="taskList"/>);

	const component = render(TaskPane(context)).getByRole('taskPane');

	expect(component).toBeInTheDocument();
	expect(TaskList.default).toHaveBeenCalledWith(context, {});
});

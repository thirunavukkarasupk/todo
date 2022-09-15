import { render } from '@testing-library/react';
import TaskList from './TaskList';
import * as Task from './Task';
import React from 'react';
import { rndString } from '@laufire/utils/random';

test('taskList', () => {
	const context = { state: { taskList: [
		{ id: rndString() },
		{ id: rndString() },
	] }};

	jest.spyOn(Task, 'default').mockReturnValue(<div role="task"/>);

	const { getAllByRole } = render(TaskList(context));

	context.state.taskList.map((task, index) => {
		expect(Task.default)
			.toHaveBeenCalledWith({ ...context, data: task }, {});
		expect(getAllByRole('task')[index]).toBeInTheDocument();
	});
});

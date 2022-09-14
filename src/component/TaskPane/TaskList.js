import React from 'react';
import Task from './Task';

const TaskList = (context) => {
	const { state: { taskList }} = context;

	return taskList.map((task) =>
		<Task key={ task.id } { ...{ ...context, data: task } }/>);
};

export default TaskList;

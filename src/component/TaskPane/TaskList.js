import React from 'react';
import Task from './Task';

const TaskList = (context) => {
	const { state: { taskList }} = context;

	return taskList.map((task) => <div key={ task.id }>
		<Task { ...{ ...context, data: task } }/>
	</div>);
};

export default TaskList;

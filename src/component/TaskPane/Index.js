import React from 'react';
import TaskList from './TaskList';

const TaskPane = (context) =>
	<div>
		<TaskList { ...context }/>
	</div>

;

export default TaskPane;

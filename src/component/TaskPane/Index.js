import React from 'react';
import TaskList from './TaskList';

const TaskPane = (context) =>
	<div role="taskPane" className="taskPane">
		<h4>TASKPANE</h4>
		<TaskList { ...context }/>
	</div>

;

export default TaskPane;

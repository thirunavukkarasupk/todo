import React from 'react';
import TaskList from './TaskList';

const TaskPane = (context) =>
	<div>
		<h4>TASKPANE</h4>
		<TaskList { ...context }/>
	</div>

;

export default TaskPane;

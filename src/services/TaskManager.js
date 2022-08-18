import { rndString } from '@laufire/utils/random';

const TaskManager = {

	getTask: (idLength, text) => ({
		id: rndString(idLength),
		task: text,
	}),

	init: ({ actions, config: { idLength, taskList }}) =>
		actions.setTask(taskList.map((task) =>
			TaskManager.getTask(idLength, task))),

	removeTask: ({ state: { taskList }, data: { id }}) =>
		taskList.filter((task) => task.id !== id),

};

export default TaskManager;

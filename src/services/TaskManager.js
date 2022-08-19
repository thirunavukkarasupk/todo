import { rndString } from '@laufire/utils/random';

const TaskManager = {

	getTask: (idLength, text) => ({
		id: rndString(idLength),
		task: text,
	}),

	init: ({ actions, config: { taskList }}) =>
		taskList.map((task) => actions.addTask(task)),

	removeTask: ({ state: { taskList }, data: { id }}) =>
		taskList.filter((task) => task.id !== id),

	addTask: ({ state: { taskList }, config: { idLength, max },
		data: text }) =>
		(taskList.length <= max
			? [...taskList, TaskManager.getTask(idLength, text)]
			: taskList),
};

export default TaskManager;

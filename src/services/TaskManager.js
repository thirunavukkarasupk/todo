import { rndString } from '@laufire/utils/random';

const TaskManager = {

	getTask: (idLength, text) => ({
		id: rndString(idLength),
		task: text,
	}),

	init: ({ actions, config: { idLength }}) =>
		actions.setTask([
			TaskManager.getTask(idLength, 'task1'),
			TaskManager.getTask(idLength, 'task2'),
			TaskManager.getTask(idLength, 'task3'),
		]),

};

export default TaskManager;

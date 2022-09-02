import TaskManager from './TaskManager';

describe('taskManager', () => {
	const
		{
			getTask,
			removeTask,
		} = TaskManager;

	const taskList = [
		{ id: 'XYZG', task: 'Debug The Code' },
		{ id: 'KLMN', task: 'Clear The Code' },
	];

	test('get task', () => {
		const idLength = 4;
		const text = expect.any(String);

		const result = getTask(idLength, text);

		expect(result).toEqual({
			id: expect.any(String),
			task: text,
		});
	});

	test('remove task from the list', () => {
		const context = { state: { taskList }, data: { id: 'XYZG' }};

		const result = removeTask(context);

		expect(result).toEqual([taskList[1]]);
	});
});

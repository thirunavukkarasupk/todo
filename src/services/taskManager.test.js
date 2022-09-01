import TaskManager from './TaskManager';

describe('taskManager', () => {
	const
		{
			getTask,
		} = TaskManager;

	test('get task', () => {
		const idLength = 4;
		const text = expect.any(String);

		const result = getTask(idLength, text);

		expect(result).toEqual({
			id: expect.any(String),
			task: text,
		});
	});
});

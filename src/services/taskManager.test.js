import TaskManager from './TaskManager';
import actions from '../core/actions';

describe('taskManager', () => {
	const
		{
			getTask,
			removeTask,
			addTask,
			init,
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

	test('init', () => {
		const context = { actions: actions, config: { taskList }};

		const result = init(context);

		expect(result).toEqual();
	});

	test('remove task from the list', () => {
		const context = { state: { taskList }, data: { id: 'XYZG' }};

		const result = removeTask(context);

		expect(result).toEqual([taskList[1]]);
	});

	test('adding task to the taskList', () => {
		const context = {
			state: { taskList },
			config: { idLength: 4, taskMax: 3 },
			data: 'Increase Bandwidth',
		};

		const result = addTask(context);

		expect(result).toEqual([...taskList, {
			id: expect.any(String),
			task: context.data,
		}]);
	});
});

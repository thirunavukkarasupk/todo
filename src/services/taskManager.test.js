import TaskManager from './TaskManager';
import actions from '../core/actions';
import { random } from '@laufire/utils';

describe('taskManager', () => {
	const
		{
			getTask,
			removeTask,
			addTask,
			init,
		} = TaskManager;

	const taskList = [
		{ id: Symbol('id'), task: 'Debug The Code' },
		{ id: Symbol('id'), task: 'Clear The Code' },
	];

	test('get task', () => {
		const idLength = 4;
		const text = Symbol('text');

		jest.spyOn(random, 'rndString').mockReturnValue(expect.any(String));

		const result = getTask(idLength, text);

		expect(result).toEqual({
			id: expect.any(String),
			task: text,
		});
	});

	test('init', () => {
		const context = {
			actions: actions,
			config: { taskList },
		};

		jest.spyOn(actions, 'addTask').mockReturnValue();

		init(context);

		taskList.map((task) => expect(actions.addTask)
			.toHaveBeenCalledWith(task));
	});

	test('remove task from the list', () => {
		const context = { state: { taskList }, data: { id: taskList[0].id }};

		const result = removeTask(context);

		expect(result).toEqual([taskList[1]]);
	});

	describe('adding task to the taskList', () => {
		test('when the max task is higher', () => {
			const context = {
				state: { taskList },
				config: { idLength: 4, taskMax: 3 },
				data: 'Increase Bandwidth',
			};

			jest.spyOn(random, 'rndString').mockReturnValue(expect.any(String));

			const result = addTask(context);

			expect(result).toEqual([...taskList, {
				id: expect.any(String),
				task: context.data,
			}]);
		});

		test('when the max Task is lesser', () => {
			const context = {
				state: { taskList },
				config: { idLength: 4, taskMax: 2 },
				data: 'Increase Bandwidth',
			};

			const result = addTask(context);

			expect(result).toEqual(taskList);
		});
	});
});

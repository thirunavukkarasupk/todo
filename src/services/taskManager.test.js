import TaskManager from './TaskManager';
import actions from '../core/actions';
import * as random from '@laufire/utils/random';

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
		const idLength = Symbol('id');
		const text = Symbol('text');
		const returnId = Symbol('returnId');

		// Todo return Symbol,Random paramaeter Check

		jest.spyOn(random, 'rndString').mockReturnValue(returnId);

		const result = getTask(idLength, text);

		expect(random.rndString).toHaveBeenCalledWith(idLength);

		expect(result).toEqual({
			id: returnId,
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
				config: { idLength: Symbol('idLength'), taskMax: 3 },
				data: Symbol('data'),
			};
			const returnId = Symbol('returnId');

			// Todo-Symbol,parameterCheck,data-Symbol,id-Symbol

			jest.spyOn(random, 'rndString').mockReturnValue(returnId);

			const result = addTask(context);

			expect(random.rndString)
				.toHaveBeenCalledWith(context.config.idLength);

			expect(result).toEqual([...taskList, {
				id: returnId,
				task: context.data,
			}]);
		});

		test('when the max Task is lesser', () => {
			const context = {
				state: { taskList },
				config: { idLength: 4, taskMax: 2 },
				data: Symbol('data'),
			};

			const result = addTask(context);

			expect(result).toEqual(taskList);
		});
	});
});

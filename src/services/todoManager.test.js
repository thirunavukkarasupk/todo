import TodoManager from './TodoManager';

describe('todoManager', () => {
	const {
		addTodo,
		removeTodo,
		toggleTodo,
		toggleAll,
		getCountOfActiveTask,
		getCountOfTodoList,
		clearButton,
		getCompletedTodo,
	} = TodoManager;

	const todoList = [{
		id: 'DDYB',
		todo: 'Test The Code',
		completed: false,
	}, {
		id: 'IJKL',
		todo: 'Fix The Bugs',
		completed: true,
	}];

	test('add todo to the todoList', () => {
		const context = {
			config: { idLength: 4 },
			state: {
				input: Symbol('input'),
				todoList: [],
			},
		};
		const newTodo = {
			id: expect.any(String),
			todo: context.state.input,
			completed: false,
		};

		const result = addTodo(context);

		expect(result).toEqual([newTodo]);
	});

	test('remove the todo from the todoList', () => {
		const context = {
			state: {
				todoList,
			},
			data: { id: 'DDYB' },
		};

		const result = removeTodo(context);

		expect(result).toEqual([todoList[1]]);
	});

	test('toggle The Todo', () => {
		const context = {
			state: {
				todoList,
			},
			data: { id: 'DDYB', completed: false },
		};
		const result = toggleTodo(context);

		expect(result)
			.toEqual([{ ...todoList[0], completed: true }, todoList[1]]);
	});

	describe('toggle all the todos', () => {
		test('when all the todos are not completed', () => {
			const context = {
				state: {
					todoList,
				},
				data: true,
			};

			const result = toggleAll(context);

			expect(result)
				.toEqual([{ ...todoList[0], completed: true },
					{ ...todoList[1], completed: true }]);
		});

		test('when all the todos are completed', () => {
			const context = {
				state: {
					todoList,
				},
				data: false,
			};

			const result = toggleAll(context);

			expect(result)
				.toEqual([{ ...todoList[0], completed: false },
					{ ...todoList[1], completed: false }]);
		});
	});

	test('count of the active todos in the todoList', () => {
		const result = getCountOfActiveTask(todoList);

		expect(result).toEqual(1);
	});

	test('count of the todos in the todoList', () => {
		const result = getCountOfTodoList(todoList);

		expect(result).toEqual(Number('2'));
	});

	test('clear the completed todo from the todoList', () => {
		const context = {
			state: { todoList },
		};

		const result = clearButton(context);

		expect(result).toEqual([todoList[0]]);
	});

	test('all the completed todos in the todoList', () => {
		const result = getCompletedTodo(todoList);

		expect(result).toEqual([todoList[1]]);
	});
});

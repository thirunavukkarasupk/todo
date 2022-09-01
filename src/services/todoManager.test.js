import TodoManager from './TodoManager';

describe('todoManager', () => {
	const { addTodo, removeTodo, toggleTodo } = TodoManager;
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
});

import TodoManager from './TodoManager';

describe('todoManager', () => {
	const { addTodo, removeTodo } = TodoManager;

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
				todoList: [{
					id: 'DDYB',
					todo: 'Test The Code',
					completed: false,
				}],
			},
			data: { id: 'DDYB' },
		};

		const result = removeTodo(context);

		expect(result).toEqual([]);
	});
});

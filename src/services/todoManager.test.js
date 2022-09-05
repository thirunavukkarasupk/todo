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
		filters,
		filterTodos,
		editTodo,
		isEditingNull,
		addTaskToTodo,
	} = TodoManager;

	const [activeTodo, completedTodo] = [{
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
				todoList: [activeTodo, completedTodo],
			},
			data: { id: 'DDYB' },
		};

		const result = removeTodo(context);

		expect(result).toEqual([completedTodo]);
	});

	test('toggle The Todo', () => {
		const context = {
			state: {
				todoList: [activeTodo, completedTodo],
			},
			data: { id: 'DDYB', completed: false },
		};
		const result = toggleTodo(context);

		expect(result)
			.toEqual([{ ...activeTodo, completed: true }, completedTodo]);
	});

	describe('toggle all the todos', () => {
		test('when all the todos are not completed', () => {
			const context = {
				state: {
					todoList: [activeTodo, completedTodo],
				},
				data: true,
			};

			const result = toggleAll(context);

			expect(result)
				.toEqual([{ ...activeTodo, completed: true },
					{ ...completedTodo, completed: true }]);
		});

		test('when all the todos are completed', () => {
			const context = {
				state: {
					todoList: [activeTodo, completedTodo],
				},
				data: false,
			};

			const result = toggleAll(context);

			expect(result)
				.toEqual([activeTodo,
					{ ...completedTodo, completed: false }]);
		});
	});

	test('count of the active todos in the todoList', () => {
		const result = getCountOfActiveTask([activeTodo, completedTodo]);

		expect(result).toEqual(1);
	});

	test('count of the todos in the todoList', () => {
		const result = getCountOfTodoList([activeTodo, completedTodo]);

		expect(result).toEqual(Number('2'));
	});

	test('clear the completed todo from the todoList', () => {
		const context = {
			state: { todoList: [activeTodo, completedTodo] },
		};

		const result = clearButton(context);

		expect(result).toEqual([activeTodo]);
	});

	test('all the completed todos in the todoList', () => {
		const result = getCompletedTodo([activeTodo, completedTodo]);

		expect(result).toEqual([completedTodo]);
	});

	describe('filters', () => {
		test('when the filter is all', () => {
			const result = filters.all();

			expect(result).toEqual(true);
		});

		test('when the filter is active ', () => {
			const todo = activeTodo;
			const result = filters.active(todo);

			expect(result).toEqual(true);
		});

		test('when the filter is active', () => {
			const todo = completedTodo;
			const result = filters.active(todo);

			expect(result).toEqual(false);
		});

		test('when the filter is completed', () => {
			const todo = activeTodo;
			const result = filters.completed(todo);

			expect(result).toEqual(false);
		});

		test('when the filter is completed', () => {
			const todo = completedTodo;
			const result = filters.completed(todo);

			expect(result).toEqual(true);
		});
	});

	describe('filter Todos from the TodoList', () => {
		test('when all is clicked', () => {
			const filter = 'all';
			const result = filterTodos([activeTodo, completedTodo], filter);

			expect(result).toEqual([activeTodo, completedTodo]);
		});

		test('when active is clicked', () => {
			const filter = 'active';
			const result = filterTodos([activeTodo, completedTodo], filter);

			expect(result).toEqual([activeTodo]);
		});

		test('when completed is clicked', () => {
			const filter = 'completed';
			const result = filterTodos([activeTodo, completedTodo], filter);

			expect(result).toEqual([completedTodo]);
		});
	});

	test('when the editing has value', () => {
		const editing = activeTodo;
		const input = 'Tested The Code';
		const result = editTodo(
			[activeTodo, completedTodo], input, editing
		);

		expect(result)
			.toEqual([{ ...activeTodo, todo: input }, completedTodo]);
	});

	describe('is editing null', () => {
		test('when editing is null', () => {
			const editing = null;
			const result = isEditingNull(editing);

			expect(result).toEqual(true);
		});

		test('when editing is not Null', () => {
			const editing = activeTodo;
			const result = isEditingNull(editing);

			expect(result).toEqual(false);
		});
	});

	test('add todo from task ', () => {
		const context = {
			state: { todoList: [activeTodo, completedTodo] },
			data: {
				id: 'KDNP',
				task: 'Increase The Bandwidth',
			},
		};
		const result = addTaskToTodo(context);

		expect(result)
			.toEqual([...context.state.todoList,
				{
					id: context.data.id,
					todo: context.data.task,
					completed: false,
				}]);
	});
});

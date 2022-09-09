import TodoManager from './TodoManager';
import * as random from '@laufire/utils/random';

describe('todoManager', () => {
	const {
		addTodo,
		removeTodo,
		toggleTodo,
		toggleAll,
		isAllChecked,
		noTodoList,
		isCompletedAboveZero,
		clearButton,
		filters,
		filterTodos,
		editTodo,
		isEditingNull,
		addTaskToTodo,
	} = TodoManager;

	const [activeTodo, completedTodo] = [{
		id: Symbol('id'),
		todo: Symbol('todo'),
		completed: false,
	}, {
		id: Symbol('id'),
		todo: Symbol('todo'),
		completed: true,
	}];

	test('add todo to the todoList', () => {
		const context = {
			config: { idLength: Symbol('idLength') },
			state: {
				input: Symbol('input'),
				todoList: [],
			},
		};
		const expected = {
			id: Symbol('id'),
			todo: context.state.input,
			completed: false,
		};

		jest.spyOn(random, 'rndString').mockReturnValue(expected.id);

		const result = addTodo(context);

		expect(random.rndString).toHaveBeenCalledWith(context.config.idLength);

		expect(result).toEqual([expected]);
	});

	test('remove the todo from the todoList', () => {
		const context = {
			state: {
				todoList: [activeTodo, completedTodo],
			},
			data: { id: activeTodo.id },
		};

		const result = removeTodo(context);

		expect(result).toEqual([completedTodo]);
	});

	describe('toggle The todo', () => {
		test('when the data is in the todoList', () => {
			const context = {
				state: {
					todoList: [activeTodo, completedTodo],
				},
				data: { id: activeTodo.id, completed: false },
			};
			const result = toggleTodo(context);

			expect(result)
				.toEqual([{ ...activeTodo, completed: true }, completedTodo]);
		});
		test('when the data is not in the todoList', () => {
			const context = {
				state: {
					todoList: [activeTodo, completedTodo],
				},
				data: { id: Symbol('differentId'), completed: false },
			};
			const result = toggleTodo(context);

			expect(result)
				.toEqual([activeTodo, completedTodo]);
		});
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

	describe('is all checked', () => {
		const completed = Symbol('completedTodo');
		const active = Symbol('activeTodo');

		// Todo {object  in mockReturnValue}

		test('all the todos are checked', () => {
			jest.spyOn(TodoManager, 'filterTodos')
				.mockReturnValue({ length: 0 });

			const result = isAllChecked([completed]);

			expect(TodoManager.filterTodos)
				.toHaveBeenCalledWith([completed], 'active');

			expect(result).toEqual(true);
		});

		test('not all the todos are checked', () => {
			jest.spyOn(TodoManager, 'filterTodos')
				.mockReturnValue({ length: 1 });

			const result = isAllChecked([active, completed]);

			expect(TodoManager.filterTodos)
				.toHaveBeenCalledWith([active, completed], 'active');

			expect(result).toEqual(false);
		});
	});

	describe('no todoList', () => {
		const todoList = Symbol('todoList');

		// TOdo:{object.length.check}

		test('todos are there in the TodoList', () => {
			const result = noTodoList(todoList);

			expect(result).toEqual(false);
		});

		test('no todos in the todoList', () => {
			const result = noTodoList([]);

			expect(result).toEqual(true);
		});
	});

	describe('is completed above zero', () => {
		const active = Symbol('activeTodo');
		const completed = Symbol('completedTodo');

		// todo.object.length check

		test('completed todos are greater than zero', () => {
			jest.spyOn(TodoManager, 'filterTodos')
				.mockReturnValue({ length: 1 });

			const result = isCompletedAboveZero([active, completed]);

			expect(TodoManager.filterTodos)
				.toHaveBeenCalledWith([active, completed], 'completed');

			expect(result).toEqual(true);
		});

		test('no completed todos in the list', () => {
			jest.spyOn(TodoManager, 'filterTodos')
				.mockReturnValue({ length: 0 });

			const result = isCompletedAboveZero([active]);

			expect(TodoManager.filterTodos)
				.toHaveBeenCalledWith([active], 'completed');

			expect(result).toEqual(false);
		});
	});

	test('clear the completed todo from the todoList', () => {
		const active = Symbol('activeTodo');
		const completed = Symbol('completedTodo');

		const context = {
			state: { todoList: [active, completed] },
		};
		// Todo todoList hastobe a Symbol

		jest.spyOn(TodoManager, 'filterTodos')
			.mockReturnValue([active]);

		const result = clearButton(context);

		expect(TodoManager.filterTodos)
			.toHaveBeenCalledWith([active, completed], 'active');

		expect(result).toEqual([active]);
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

	test('edit todo', () => {
		const context = {
			state: { todoList: [activeTodo, completedTodo],
				input: Symbol('input'),
				editing: activeTodo },
		};

		const result = editTodo(context);

		expect(result)
			.toEqual([{ ...activeTodo, todo: context.state.input },
				completedTodo]);
	});

	describe('is editing null', () => {
		test('when editing is null', () => {
			const editing = null;
			const result = isEditingNull(editing);

			expect(result).toEqual(true);
		});

		test('when editing is not Null', () => {
			const editing = Symbol('activeTodo');
			const result = isEditingNull(editing);

			expect(result).toEqual(false);
		});
	});

	test('add todo from task ', () => {
		const active = Symbol('activeTodo');
		const completed = Symbol('completedTodo');

		const context = {
			state: { todoList: [active, completed] },
			data: {
				id: Symbol('id'),
				task: Symbol('task'),
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

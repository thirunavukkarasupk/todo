import actions from './actions';
import TodoManager from '../services/TodoManager';
import TaskManager from '../services/TaskManager';

describe('actions', () => {
	const { setInput,
		addTodo,
		removeTodo,
		toggleTodo,
		toggleAll,
		clearButton,
		filterButton,
		setEditing,
		editTodo,
		removeTask,
		addTaskToTodo,
		addTask } = actions;

	const todoList = Symbol('todoList');
	const taskList = Symbol('taskList');

	test('set the given Input', () => {
		const data = Symbol('data');

		const result = setInput({ data });

		expect(result).toEqual({ input: data });
	});

	test('adding todo to a todoList', () => {
		jest.spyOn(TodoManager, 'addTodo').mockReturnValue(todoList);

		const context = Symbol('context');

		const result = addTodo(context);

		expect(TodoManager.addTodo)
			.toHaveBeenCalledWith(context);

		expect(result).toEqual({ todoList });
	});

	test('remove a todo from the List', () => {
		jest.spyOn(TodoManager, 'removeTodo').mockReturnValue(todoList);

		const context = Symbol('context');

		const result = removeTodo(context);

		expect(TodoManager.removeTodo).toHaveBeenCalledWith(context);

		expect(result).toEqual({ todoList });
	});

	test('toggle a todo in the todoList', () => {
		jest.spyOn(TodoManager, 'toggleTodo').mockReturnValue(todoList);

		const context = Symbol('context');

		const result = toggleTodo(context);

		expect(TodoManager.toggleTodo).toHaveBeenCalledWith(context);

		expect(result).toEqual({ todoList });
	});

	test('toggle all the todos in the list', () => {
		jest.spyOn(TodoManager, 'toggleAll').mockReturnValue(todoList);

		const context = Symbol('context');

		const result = toggleAll(context);

		expect(TodoManager.toggleAll).toHaveBeenCalledWith(context);

		expect(result).toEqual({ todoList });
	});

	test('clear the completed tasks', () => {
		jest.spyOn(TodoManager, 'clearButton').mockReturnValue(todoList);

		const context = Symbol('context');

		const result = clearButton(context);

		expect(TodoManager.clearButton).toHaveBeenCalledWith(context);

		expect(result).toEqual({ todoList });
	});

	test('filter button', () => {
		const filter = Symbol('filter');

		const result = filterButton({ data: filter });

		expect(result).toEqual({ filter });
	});

	test('set the values to be edited', () => {
		const context = {
			data: {
				todo: Symbol('todo'),
			},
		};

		jest.spyOn(TodoManager, 'getEditMode').mockReturnValue(todoList);
		const result = setEditing(context);

		expect(result).toEqual({ input: context.data.todo,
			editing: context.data,
			todoList: todoList });
	});

	test('edit the todo in the todoList', () => {
		jest.spyOn(TodoManager, 'editTodo').mockReturnValue(todoList);

		const context = Symbol('context');

		const result = editTodo(context);

		expect(TodoManager.editTodo)
			.toHaveBeenCalledWith(context);

		expect(result).toEqual({
			input: '',
			editing: null,
			todoList: todoList,
		});
	});

	test('remove the task from the taskList', () => {
		jest.spyOn(TaskManager, 'removeTask').mockReturnValue(taskList);

		const context = Symbol('context');

		const result = removeTask(context);

		expect(TaskManager.removeTask)
			.toHaveBeenCalledWith(context);

		expect(result).toEqual({ taskList });
	});

	test('adding a todo from the taskList', () => {
		jest.spyOn(TodoManager, 'addTaskToTodo').mockReturnValue(todoList);

		const context = Symbol('context');

		const result = addTaskToTodo(context);

		expect(TodoManager.addTaskToTodo)
			.toHaveBeenCalledWith(context);

		expect(result).toEqual({ todoList });
	});

	test('adding a task to the taskList', () => {
		jest.spyOn(TaskManager, 'addTask').mockReturnValue(taskList);

		const context = Symbol('context');

		const result = addTask(context);

		expect(TaskManager.addTask)
			.toHaveBeenCalledWith(context);

		expect(result).toEqual({ taskList });
	});
});

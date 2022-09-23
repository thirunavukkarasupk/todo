import { rndString } from '@laufire/utils/random';

const TodoManager = {
	addTodo: ({ config: { idLength }, state: { input, todoList }}) =>
		[...todoList,
			{ id: rndString(idLength),
				todo: input,
				completed: false,
				mode: 'edit-inactive' }],

	removeTodo: ({ state: { todoList }, data: { id }}) =>
		todoList.filter((todo) => todo.id !== id),

	toggleTodo: ({ state: { todoList }, data: { id, completed }}) =>
		todoList.map((todo) => (todo.id === id
			? {
				...todo,
				completed: !completed,
			}
			: todo)),

	toggleAll: ({ state: { todoList }, data }) =>
		todoList.map((todo) => ({
			...todo,
			completed: data,
		})),

	isAllChecked: (todoList) =>
		TodoManager.filterTodos(todoList, 'active').length === 0,

	noTodoList: (todoList) => todoList.length === 0,

	isCompletedAboveZero: (todoList) =>
		TodoManager.filterTodos(todoList, 'completed').length > 0,

	clearButton: ({ state: { todoList }}) =>
		TodoManager.filterTodos(todoList, 'active'),

	filters: {
		all: () => true,
		active: (todo) => !todo.completed,
		completed: (todo) => todo.completed,
	},

	filterTodos: (todoList, filter) =>
		todoList.filter(TodoManager.filters[filter]),

	editTodo: ({ state: { todoList, input, editing }}) =>
		todoList.map((todo) => (todo.id === editing.id
			? { ...todo, todo: input }
			: todo)),

	isEditingNull: (editing) => editing === null,

	addTaskToTodo: ({ state: { todoList }, data }) =>
		[...todoList,
			{ id: data.id,
				todo: data.task,
				completed: false }],

	getEditMode: ({ state: { editing }, data, config: { edit }}) =>
		(editing && editing.id === data.id
			? edit[1]
			: data.mode),
};

export default TodoManager;

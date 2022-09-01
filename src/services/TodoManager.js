import { rndString } from '@laufire/utils/random';

const TodoManager = {
	addTodo: ({ config: { idLength }, state: { input, todoList }}) =>
		[...todoList,
			{ id: rndString(idLength),
				todo: input,
				completed: false }],

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

	getCountOfActiveTask: (todoList) =>
		todoList.filter((todo) => !todo.completed).length,

	getCountOfTodoList: (todoList) => todoList.length,

	clearButton: ({ state: { todoList }}) =>
		todoList.filter((todo) => !todo.completed),

	getCompletedTodo: (todoList) =>
		todoList.filter((todo) => todo.completed),

	filters: {
		all: () => true,
		active: (todo) => !todo.completed,
		completed: (todo) => todo.completed,
	},

	filterTodos: (todoList, filter) =>
		todoList.filter(TodoManager.filters[filter]),

	editTodo: (
		todoList, input, editing
	) =>
		todoList.map((todo) => (todo.id === editing.id
			? { ...todo, todo: input }
			: todo)),

	isEditingNull: (editing) => editing === null,

	addTaskToTodo: ({ state: { todoList }, data }) =>
		[...todoList,
			{ id: data.id,
				todo: data.task,
				completed: false }],
};

export default TodoManager;

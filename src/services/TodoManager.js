import { filter } from '@laufire/utils/collection';
import { rndString } from '@laufire/utils/random';

const TodoManager = {
	addTodo: ({ config: { idLength }, state: { input, todoList }}) =>
		[...todoList,
			{ id: rndString(idLength),
				todo: input,
				completed: false }],

	removeTodo: ({ state: { todoList }, data: { id }}) =>
		filter(todoList, (todo) => todo.id !== id),

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

	isChecked: ({ state: { todoList }}) =>
		todoList.filter((todo) => !todo.completed)
			.length === 0 && todoList.length !== 0,
};

export default TodoManager;

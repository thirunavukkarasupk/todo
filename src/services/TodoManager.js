import { filter } from '@laufire/utils/collection';
import { rndString } from '@laufire/utils/random';

const TodoManager = {
	addTodo: ({ config: { idLength }, state: { input, todoList }}) =>
		[...todoList,
			{ id: rndString(idLength),
				todo: input,
				completed: false }],

	removeTodo: ({ state: { todoList }, data: { id }}) =>
		filter(todoList, (element) => element.id !== id),
};

export default TodoManager;

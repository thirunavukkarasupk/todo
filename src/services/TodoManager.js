import { rndString } from '@laufire/utils/random';

const TodoManager = {
	addTodo: ({ config: { idLength }, state: { input, todoList }}) =>
		[...todoList,
			{ id: rndString(idLength),
				todo: input,
				completed: false }],

};

export default TodoManager;

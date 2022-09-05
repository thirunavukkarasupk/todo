import actions from './actions';
import TodoManager from '../services/TodoManager';

describe('actions', () => {
	const { setInput, addTodo } = actions;

	const context = Symbol('context');
	const todoList = Symbol('todoList');

	test('set the given Input', () => {
		const data = Symbol('data');

		const result = setInput({ data });

		expect(result).toEqual({ input: data });
	});

	test('adding todo to a todoList', () => {
		jest.spyOn(TodoManager, 'addTodo').mockReturnValue(todoList);

		const result = addTodo(context);

		expect(TodoManager.addTodo)
			.toHaveBeenCalledWith(context);

		expect(result).toEqual({ todoList });
	});
});

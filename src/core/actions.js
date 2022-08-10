import TodoManager from '../services/TodoManager';

const setInput = ({ data }) => ({
	input: data,
});

const addTodo = (context) =>
	({
		todoList: TodoManager.addTodo(context),
	});

const removeTodo = (context) =>
	({
		todoList: TodoManager.removeTodo(context),
	});

const actions = {
	setInput,
	addTodo,
	removeTodo,
};

export default actions;

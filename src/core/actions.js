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

const toggleTodo = (context) => ({
	todoList: TodoManager.toggleTodo(context),
});

const toggleAll = (context) => ({
	todoList: TodoManager.toggleAll(context),
});

const actions = {
	setInput,
	addTodo,
	removeTodo,
	toggleTodo,
	toggleAll,
};

export default actions;

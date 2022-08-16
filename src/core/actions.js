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

const clearButton = (context) => ({
	todoList: TodoManager.clearButton(context),
});
const filterButton = ({ data: filter }) => ({
	filter,

});
const setEditing = ({ data }) => ({
	input: data.todo,
	editing: data,
});

const editTodo = ({ state: { todoList, input, editing }}) => ({
	input: '',
	editing: null,
	todoList: TodoManager.editTodo(
		todoList, input, editing
	),
});

const actions = {
	setInput,
	addTodo,
	removeTodo,
	toggleTodo,
	toggleAll,
	clearButton,
	filterButton,
	setEditing,
	editTodo,
};

export default actions;

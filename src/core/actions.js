import TaskManager from '../services/TaskManager';
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

const editTodo = (context) => ({
	input: '',
	editing: null,
	todoList: TodoManager.editTodo(context),
});

const removeTask = (context) => ({
	taskList: TaskManager.removeTask(context),
});

const addTaskToTodo = (context) => ({
	todoList: TodoManager.addTaskToTodo(context),
});

const addTask = (context) => ({
	taskList: TaskManager.addTask(context),
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
	removeTask,
	addTaskToTodo,
	addTask,
};

export default actions;

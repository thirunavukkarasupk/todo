
import React from 'react';
import Todo from './Todo';
import TodoManager from '../../services/TodoManager';

const TodoList = (context) => {
	const { state: { todoList, filter }} = context;
	const filteredTodos = TodoManager.filterTodos(todoList, filter);

	return filteredTodos.map((todo) =>
		<div key={ todo.id } className="todo-div">
			<Todo { ...{ ...context, data: todo } }/>
		</div>);
};

export default TodoList;

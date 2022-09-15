import React from 'react';
import Todo from './Todo';
import TodoManager from '../../services/TodoManager';

const TodoList = (context) => {
	const { state: { todoList, filter }} = context;

	return TodoManager.filterTodos(todoList, filter).map((todo) =>
		<div key={ todo.id } className="todo-div" role="todoList">
			<Todo { ...{ ...context, data: todo } }/>
		</div>);
};

export default TodoList;

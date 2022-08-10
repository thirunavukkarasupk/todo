
import React from 'react';
import Todo from './Todo';

const TodoList = (context) =>
	context.state.todoList.map((todo) => <div key={ todo.id }>
		<Todo { ...{ ...context, data: todo } }/>
	</div>);

export default TodoList;

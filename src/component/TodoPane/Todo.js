import React from 'react';
import RemoveButton from './RemoveButton';
import CheckBox from './CheckBox';

const Todo = (context) => {
	const { data, actions } = context;
	const { todo, completed, mode } = data;

	return (
		<div
			role="todo"
			className={ completed ? 'todo-completed' : 'todo-active' }
		>
			<CheckBox { ...context }/>
			<span
				role="todoText"
				className={ mode }
				onClick={ () => actions.setEditing(data) }
			>{todo}</span>
			<RemoveButton { ...context }/>
		</div>);
};

export default Todo;

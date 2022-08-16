import React from 'react';

const actionKeys = {
	Enter: ({ actions, state: { input }}) => actions.addTodo(input),
	Escape: ({ actions }) => actions.setInput(''),
};

const TodoInput = (context) => {
	const { state: { input }, actions } = context;

	return (
		<input
			value={ input }
			onChange={ (event) => actions.setInput(event.target.value) }
			onKeyUp={ (event) =>
				actionKeys[event.code] && actionKeys[event.code](context) }
		/>
	);
};

export default TodoInput;

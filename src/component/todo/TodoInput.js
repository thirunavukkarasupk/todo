import React from 'react';

const TodoInput = ({ state: { input }, actions }) =>
	<input
		value={ input }
		onChange={ (event) => actions.setInput(event.target.value) }
	/>
	;

export default TodoInput;

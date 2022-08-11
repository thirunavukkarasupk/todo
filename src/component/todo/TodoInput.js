import React from 'react';

const TodoInput = ({ state, actions }) =>
	<input
		value={ state.input }
		onChange={ (event) => actions.setInput(event.target.value) }
	/>
	;

export default TodoInput;

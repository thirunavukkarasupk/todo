import React from 'react';

const TodoInput = ({ state, actions }) =>
	<input
		value={ state.input }
		onChange={ (evt) => actions.setInput(evt.target.value) }
	/>;

export default TodoInput;

import React from 'react';

const TodoInput = ({ state, actions }) => {
	<label>Enter The Task:</label>;
	return (
		<input
			value={ state.input }
			onChange={ (evt) => actions.setInput(evt.target.value) }
		/>);
}
	;

export default TodoInput;

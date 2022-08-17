import React from 'react';

const AddButton = ({ actions, state: { input }}) =>
	<button
		onClick={ () => actions.addTodo(input) }
	>Add</button>;

export default AddButton;

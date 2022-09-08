import React from 'react';

const AddButton = ({ actions, state: { input }}) =>
	<button
		role="addButton"
		onClick={ () => actions.addTodo(input) }
	>Add</button>;

export default AddButton;

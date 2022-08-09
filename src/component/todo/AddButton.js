import React from 'react';

const AddButton = (context) =>
	<button
		onClick={ () => context.actions.addTodo(context) }
	>Add</button>;

export default AddButton;

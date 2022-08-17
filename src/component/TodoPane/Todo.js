import React from 'react';
import RemoveButton from './RemoveButton';
import CheckBox from './CheckBox';

const Todo = (context) => {
	const { data, actions } = context;
	const { todo } = data;

	return <div>
		<CheckBox { ...context }/>
		<span
			onClick={ () => actions.setEditing(data) }
		>{todo}</span>
		<RemoveButton { ...context }/>
	</div>;
};

export default Todo;

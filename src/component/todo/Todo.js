
import React from 'react';
import RemoveButton from './RemoveButton';
import CheckBox from './CheckBox';

const Todo = (context) => {
	const { data } = context;
	const { todo, id } = data;

	return <div key={ id }>
		<CheckBox { ...context }/>
		<span>{todo}</span>
		<RemoveButton { ...context }/>
	</div>;
};

export default Todo;

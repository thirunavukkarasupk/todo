
import React from 'react';
import RemoveButton from './RemoveButton';

const Todo = (context) => {
	const { data } = context;
	const { todo, id } = data;

	return <div key={ id }>
		<span>{todo}</span>
		<RemoveButton { ...context }/>
	</div>;
};

export default Todo;

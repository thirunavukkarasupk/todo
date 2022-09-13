import React from 'react';
import AddButton from './AddButton';
import RemoveButton from './RemoveButton';

const Task = (context) => {
	const { data: { task }} = context;

	return (
		<div role="task">
			<AddButton { ...context }/>
			{task}
			<RemoveButton { ...context }/>
		</div>
	);
};

export default Task;

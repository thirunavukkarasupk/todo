import React from 'react';
import RemoveButton from './RemoveButton';

const Task = (context) => {
	const { data: { task }} = context;

	return (
		<div>
			{task}
			<RemoveButton { ...context }/>
		</div>
	);
};

export default Task;

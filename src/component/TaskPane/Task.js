import React from 'react';

const Task = (context) => {
	const { data: { task }} = context;

	return (
		<div>
			{task}
		</div>
	);
};

export default Task;

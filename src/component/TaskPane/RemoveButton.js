import React from 'react';

const RemoveButton = (context) => {
	const { actions, data } = context;

	return (
		<button
			onClick={ () => actions.removeTask(data) }
		>X</button>);
};

export default RemoveButton;

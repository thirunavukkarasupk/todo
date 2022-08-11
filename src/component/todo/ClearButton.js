import React from 'react';

const ClearButton = (context) => {
	const { actions } = context;

	return (
		<button
			onClick={ () => actions.clearButton() }
		>ClearButton
		</button>);
};

export default ClearButton;

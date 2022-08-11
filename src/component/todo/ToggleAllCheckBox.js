import React from 'react';
import TodoManager from '../../services/TodoManager';

const ToggleAll = (context) => {
	const { actions } = context;
	const isChecked = TodoManager.isChecked(context);

	return (
		<input
			type="checkbox"
			checked={ isChecked }
			onChange={ () => actions.toggleAll(!isChecked) }
		/>
	);
};

export default ToggleAll;

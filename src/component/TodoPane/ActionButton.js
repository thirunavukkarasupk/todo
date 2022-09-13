import React from 'react';
import AddButton from './AddButton';
import EditButton from './EditButton';

const ActionButton = (context) => {
	const { state: { editing }} = context;

	return editing
		? <EditButton { ...context }/>
		: <AddButton { ...context }/>;
};

export default ActionButton;

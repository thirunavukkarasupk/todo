import React from 'react';
import AddButton from './AddButton';
import EditButton from './EditButton';

const ActionButton = (context) => {
	const { state: { editing }} = context;

	return editing
		? <EditButton role="actionButton" { ...context }/>
		: <AddButton role="actionButton" { ...context }/>;
};

export default ActionButton;

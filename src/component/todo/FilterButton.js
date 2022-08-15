import React from 'react';

const FilterButton = (context) => {
	const { actions, data: filter } = context;

	return (
		<button
			onClick={ () => actions.filterButton(filter) }
		>
			{ filter }
		</button>);
};

export default FilterButton;

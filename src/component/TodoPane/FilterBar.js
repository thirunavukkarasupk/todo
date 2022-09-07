import React from 'react';
import FilterButton from './FilterButton';

const FilterBar = (context) => {
	const { config: { filters }} = context;

	return filters.map((filter) => <span key={ filter } role="filterBar">
		<FilterButton { ...{ ...context, data: filter } }/>
	</span>);
} ;

export default FilterBar;

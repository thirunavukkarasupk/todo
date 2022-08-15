import React from 'react';
import FilterButton from './FilterButton';

const FilterBar = (context) => {
	const { config: { Filters }} = context;

	return Filters.map((filter) => <span key={ filter }>
		<FilterButton { ...{ ...context, data: filter } }/>
	</span>);
} ;

export default FilterBar;

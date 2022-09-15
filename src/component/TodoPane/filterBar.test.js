import { render } from '@testing-library/react';
import React from 'react';
import FilterBar from './FilterBar';
import * as FilterButton from './FilterButton';

test('displays all the filter button', () => {
	const context = {
		config: { filters: ['all', 'active', 'completed'] },
	};

	jest.spyOn(FilterButton, 'default')
		.mockReturnValue(<div role="filterButton"/>);

	const { getAllByRole } = render(FilterBar(context));

	context.config.filters.map((filter, index) => {
		expect(FilterButton.default)
			.toHaveBeenCalledWith({ ...context, data: filter }, {});
		expect(getAllByRole('filterBar')[index]).toBeInTheDocument();
		expect(getAllByRole('filterButton')[index]).toBeInTheDocument();
	});
});

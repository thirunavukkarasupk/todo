import { render } from '@testing-library/react';
import React from 'react';
import ActionButton from './ActionButton';
import * as AddButton from './AddButton';
import * as EditButton from './EditButton';

describe('action button', () => {
	test('when editing has value', () => {
		const context = { state: { editing: Symbol('editing') }};

		jest.spyOn(EditButton, 'default')
			.mockReturnValue(<div role="editTodo"/>);

		const { getByRole } = render(ActionButton(context));

		expect(getByRole('editTodo')).toBeInTheDocument();
		expect(EditButton.default).toHaveBeenCalledWith(context, {});
	});

	test('when editing is null', () => {
		const context = { state: { editing: null }};

		jest.spyOn(AddButton, 'default')
			.mockReturnValue(<div role="addButton"/>);

		const { getByRole } = render(ActionButton(context));

		expect(getByRole('addButton')).toBeInTheDocument();
		expect(AddButton.default).toHaveBeenCalledWith(context, {});
	});
});

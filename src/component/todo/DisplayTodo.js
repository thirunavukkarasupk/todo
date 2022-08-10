import { map } from '@laufire/utils/collection';
import React from 'react';

const DisplayTodo = ({ state: { todoList }}) => {
	// eslint-disable-next-line no-console
	console.log(todoList);
	return <div>
		{map(todoList, (element) => <div key={ element.id }>
			<h4> {element.todo}</h4>
		</div>)}
	</div>;
};

export default DisplayTodo;

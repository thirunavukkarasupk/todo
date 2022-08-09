import React from 'react';

const DisplayTodo = ({ state: { todoList }}) =>
	<div>
		{todoList.map((element, index) =>
			<div key={ index }>
				<h4> {element}</h4>
			</div>)}
	</div>;

export default DisplayTodo;

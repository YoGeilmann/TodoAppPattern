import React from 'react';
import { Todo } from './Todo';

// presentational componont for todo-list
export const TodoList = ({
	todos,
	onTodoClick
}) => (
	<ul>
		{todos.map(todo => 
			<Todo
				key={todo.id}
				{...todo}
				onClick={() => onTodoClick(todo.id)}
			/>
		 )}
	</ul>
);
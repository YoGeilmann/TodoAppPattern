import React from 'react';

// presentational component for rendered todo-items
export const Todo = ({
	onClick,
	completed,
	text
}) => (
	<li onClick={onClick}
		style={{
			textDecoration:
			completed ?
			   "line-through" :
			   "none"
	}}>
		{text}
	</li>
);
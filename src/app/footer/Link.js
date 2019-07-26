import React from 'react';

// presentational component for Links
export const Link = ({
	active,
	children,
	onClick
}) => {
	if (active) {
		return <span>{children}</span>;
	} 
	
	return (
		// eslint-disable-next-line jsx-a11y/anchor-is-valid
		<a href="#"
			onClick={e=> {
				e.preventDefault();
				onClick();
			}}
		>
			{children}
		</a>
	)
}
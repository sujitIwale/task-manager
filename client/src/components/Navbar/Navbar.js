import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	const location = useLocation();
	const isSelected = (path) => {
		if (path === location.pathname) return 'selected';
	};
	return (
		<div className='navbar'>
			<ul>
				<Link to='/todos'>
					<li className={`${isSelected('/todos')}`}>Todo</li>
				</Link>
				<Link to='/notes'>
					<li className={`${isSelected('/notes')}`}>Notes</li>
				</Link>
			</ul>
		</div>
	);
};

export default Navbar;

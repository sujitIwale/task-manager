import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	const location = useLocation();
	const isSelected = (path) => {
		if (path === location.pathname) return 'active';
	};
	return (
		<>
			<nav className='main-menu'>
				<ul>
					<li>
						<Link to='/'>
							<i className={`fa fa-home ${isSelected('/')}`}></i>
							<span className='nav-text'>Home</span>
						</Link>
					</li>
					<li>
						<Link to='/todos'>
							<i
								className={`fa fa-tasks ${isSelected(
									'/todos'
								)}`}></i>
							<span className='nav-text'>Tasks</span>
						</Link>
					</li>
					<li>
						<Link to='/notes'>
							<i
								className={`fa fa-sticky-note ${isSelected(
									'/notes'
								)}`}></i>
							<span className='nav-text'>Notes</span>
						</Link>
					</li>
					<li>
						<Link to='/kanban'>
							<i
								className={`fa fa-laptop ${isSelected(
									'/kanban'
								)}`}></i>
							<span className='nav-text'>Kanban</span>
						</Link>
					</li>
					<li>
						<Link to='/'>
							<i
								className={`fa fa-user-friends ${isSelected(
									'/teams'
								)}`}></i>
							<span className='nav-text'>Teams</span>
						</Link>
					</li>
					<li>
						<Link to='/'>
							<i
								className={`fa fa-user ${isSelected(
									'/account'
								)}`}></i>
							<span className='nav-text'>Account</span>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;

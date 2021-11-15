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
			{/* <div class='area'></div> */}
			<nav class='main-menu'>
				<ul>
					<li>
						<Link to='/'>
							<i className={`fa fa-home ${isSelected('/')}`}></i>
							<span class='nav-text'>Home</span>
						</Link>
					</li>
					<li>
						<Link to='/todos'>
							<i
								className={`fa fa-tasks ${isSelected(
									'/todos'
								)}`}></i>
							<span class='nav-text'>Tasks</span>
						</Link>
					</li>
					<li>
						<Link to='/notes'>
							<i
								className={`fa fa-sticky-note ${isSelected(
									'/notes'
								)}`}></i>
							<span class='nav-text'>Notes</span>
						</Link>
					</li>
					<li>
						<Link to='/projects'>
							<i
								className={`fa fa-laptop ${isSelected(
									'/projects'
								)}`}></i>
							<span class='nav-text'>Projects</span>
						</Link>
					</li>
					<li>
						<Link to='/'>
							<i
								className={`fa fa-user-friends ${isSelected(
									'/teams'
								)}`}></i>
							<span class='nav-text'>Teams</span>
						</Link>
					</li>
					<li>
						<Link to='/'>
							<i
								className={`fa fa-user ${isSelected(
									'/account'
								)}`}></i>
							<span class='nav-text'>Account</span>
						</Link>
					</li>
				</ul>

				{/* <ul class='logout'>
					<li>
						<Link to='/'>
							<i
								className={`fa fa-home ${isSelected('/')}`}></i>
							<span class='nav-text'>Home</span>
						</Link>
					</li>
				</ul> */}
			</nav>
		</>
	);
};

export default Navbar;

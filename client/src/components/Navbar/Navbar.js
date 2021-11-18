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
							<div className='column'>
								<i
									className={`fa fa-home ${isSelected(
										'/'
									)}`}></i>
								<span className='nav-text'>Home</span>
							</div>
						</Link>
					</li>
					<li>
						<Link to='/todos'>
							<div className='column'>
								<i
									className={`fa fa-tasks ${isSelected(
										'/todos'
									)}`}></i>
								<span className='nav-text'>Tasks</span>
							</div>
						</Link>
					</li>
					<li>
						<Link to='/notes'>
							<div className='column'>
								<i
									className={`fa fa-sticky-note ${isSelected(
										'/notes'
									)}`}></i>
								<span className='nav-text'>Notes</span>
							</div>
						</Link>
					</li>
					<li>
						<Link to='/kanban'>
							<div className='column'>
								<i
									className={`fa fa-laptop ${isSelected(
										'/kanban'
									)}`}></i>
								<span className='nav-text'>Kanban</span>
							</div>
						</Link>
					</li>
					<li>
						<Link to='/'>
							<div className='column'>
								<i
									className={`fa fa-user-friends ${isSelected(
										'/teams'
									)}`}></i>
								<span className='nav-text'>Teams</span>
							</div>
						</Link>
					</li>
					<li>
						<Link to='/'>
							<div className='column'>
								<i
									className={`fa fa-user ${isSelected(
										'/account'
									)}`}></i>
								<span className='nav-text'>Account</span>
							</div>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;

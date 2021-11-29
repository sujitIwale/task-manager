import React from 'react';
import './Landing.css';

const Landing = () => {
	return (
		<div className='landing-page-container'>
			<div className='landing-page'>
				<div className='header-area'>
					<div className='logo'>
						<b>Prodctvt</b>
					</div>
					<ul className='links'>
						<li>Home</li>
						<li>About Us</li>
						<li>Work</li>
						<li>Info</li>
						<li>Sign In</li>
					</ul>
				</div>
				<div className='main-section'>
					<div className='info'>
						<h1>Looking For Inspiration</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Repellendus odit nihil ullam nesciunt quidem
							iste, Repellendus odit nihil
						</p>
						<button>Get Started</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;

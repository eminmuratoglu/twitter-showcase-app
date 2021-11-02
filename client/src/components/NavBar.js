import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="navbar-brand mx-3">H | T</div>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item">
						<NavLink exact to="/" className="nav-link">
							Home
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink exact to="/searchtweets" className="nav-link">
							Search Tweets
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink exact to="/randomtweets" className="nav-link">
							Random Tweets
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default NavBar;

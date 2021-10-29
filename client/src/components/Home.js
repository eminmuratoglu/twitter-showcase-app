import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';
import Feature from './Features';
import twitterBird from './images/twitter-bird.png';

export class Home extends Component {
	render() {
		return (
			<div>
				<h1 className="homepage-heading ">Hunt 🏹 Tweets</h1>
				<div className="homepage-body">
					<img className="homepage-img" src={twitterBird} alt="twitter bird" />
					<div>
						<div className="feature-1">
							<Feature>Go to Search Tweets section to search up any tweet</Feature>
						</div>
						<div className="feature-2">
							<Feature>Go to Random section to get a random tweet from my favorites</Feature>
						</div>
						<div className="feature-3">
							<Feature>Enjoy hunting down tweets you like!</Feature>
						</div>
						<div className="linkBtns-container">
							<NavLink exact to="/searchtweets">
								<button className="btn btn-primary">Search Tweets</button>
							</NavLink>
							<NavLink exact to="/randomtweets">
								<button className="btn btn-primary">Random Tweets</button>
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;

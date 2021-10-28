import React, { Component } from 'react';
import NavBar from './NavBar';
import Routes from './Routes';
import './App.css';
import axios from 'axios';

class App extends Component {
	state = {
		tweetsByContent: [],
		tweetsByUser: []
	};

	getTweetsByContent = async (url, callbackForNoResult) => {
		const response = await axios.get(url);
		this.setState({ tweetsByContent: response.data, tweetsByUser: [] });
		callbackForNoResult();
	};

	getTweetsByUser = async (url, callbackForNoResult) => {
		const response = await axios.get(url);
		this.setState({ tweetsByUser: response.data, tweetsByContent: [] });
		callbackForNoResult();
	};

	render() {
		return (
			<div className="App">
				<NavBar />
				<div className="content__container">
					<h1 className="display-3">Hunt 🏹 Tweets</h1>
					<Routes
						tweetsByContent={this.state.tweetsByContent}
						tweetsByUser={this.state.tweetsByUser}
						getTweetsByContent={this.getTweetsByContent}
						getTweetsByUser={this.getTweetsByUser}
					/>
				</div>
			</div>
		);
	}
}
export default App;

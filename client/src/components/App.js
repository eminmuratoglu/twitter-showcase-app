import React, { Component } from 'react';
import NavBar from './NavBar';
import Routes from './Routes';
import './App.css';
import axios from 'axios';

class App extends Component {
	state = {
		tweetsByContent: [],
		tweetsByUser: []
		// searchQuery: ''
	};

	getTweetsByContent = async (url) => {
		const response = await axios.get(url);
		this.setState({ tweetsByContent: response.data, tweetsByUser: [] });
	};

	getTweetsByUser = async (url) => {
		const response = await axios.get(url);
		this.setState({ tweetsByUser: response.data, tweetsByContent: [] });
	};

	// getSearchQuery = (inputText) => {
	// 	this.setState({ searchQuery: inputText });
	// };

	render() {
		return (
			<div className="App">
				<NavBar />
				<div className="content__container">
					<h1 className="display-3">Twitter Showcase App</h1>
					<Routes
						tweetsByContent={this.state.tweetsByContent}
						tweetsByUser={this.state.tweetsByUser}
						getSearchQuery={this.getSearchQuery}
						getTweetsByContent={this.getTweetsByContent}
						getTweetsByUser={this.getTweetsByUser}
					/>
				</div>
			</div>
		);
	}
}
export default App;

import React, { Component } from 'react';
import NavBar from './NavBar';
import Routes from './Routes';
import './App.css';
import axios from 'axios';

class App extends Component {
	// state = {
	// 	tweets: [],
	// 	searchQuery: ''
	// 	// searchType: ''
	// };

	// try carrying this functionality to searchtweet.js

	// getTweetsByContent = async () => {
	// 	// this.setState({ searchType: 'content' });
	// 	const resp = await axios.get(`/api/tweets/content/?searchQuery=${this.state.searchQuery}`);
	// 	this.setState({ tweets: resp.data });
	// 	console.log(this.state.tweets);
	// };

	// getTweetsByUser = async () => {
	// 	// this.setState({ searchType: 'user' });
	// 	const resp = await axios.get(`/api/tweets/user/?searchQuery=${this.state.searchQuery}`);
	// 	this.setState({ tweets: resp.data });
	// 	console.log(this.state.tweets);
	// };

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
					// tweets={this.state.tweets}
					// getSearchQuery={this.getSearchQuery}
					// getTweetsByContent={this.getTweetsByContent}
					// getTweetsByUser={this.getTweetsByUser}
					// // searchType={this.state.searchType}
					/>
				</div>
			</div>
		);
	}
}
export default App;

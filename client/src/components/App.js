import React, { Component } from 'react';
import NavBar from './NavBar';
import Routes from './Routes';
import './App.css';
import axios from 'axios';

class App extends Component {
	state = {
		tweets: [],
		searchQuery: ''
	};

	getTweet = async (type) => {
		const resp = await axios.get('/api/tweets', {
			params: {
				searchQuery: this.state.searchQuery,
				searchType: type
			}
		});
		const tweetResults = resp.data;
		console.log(tweetResults);
		this.setState({ tweets: tweetResults });
		console.log('state-inside:', this.state.tweets);
	};

	getSearchQuery = (inputText) => {
		this.setState({ searchQuery: inputText });
	};

	render() {
		return (
			<div className="App">
				<NavBar />
				<div className="content__container">
					<h1 className="display-3">Twitter Showcase App</h1>
					<Routes tweets={this.state.tweets} getTweet={this.getTweet} getSearchQuery={this.getSearchQuery} />
				</div>
			</div>
		);
	}
}
export default App;

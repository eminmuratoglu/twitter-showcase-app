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

	componentDidMount() {
		this.getData();
	}

	getData = async () => {
		const tweetsArr = [];
		const tweets = (await axios.get('/api/tweets')).data;
		tweets.forEach((twt) => {
			tweetsArr.push(twt);
		});
		this.setState({ tweets: tweetsArr });
	};

	getSearchQuery = (searchText) => {
		this.setState({ searchQuery: searchText });
	};

	render() {
		return (
			<div className="App">
				<NavBar />
				<div className="content__container">
					<h1 className="display-3">Twitter Showcase App</h1>
					<Routes tweets={this.state.tweets} query={this.state.searchQuery} getSearchQuery={this.getSearchQuery} />
				</div>
			</div>
		);
	}
}
export default App;

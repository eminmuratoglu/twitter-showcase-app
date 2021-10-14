import React, { Component } from 'react';
import NavBar from './NavBar';
import Routes from './Routes';
import './App.css';
import axios from 'axios';

class App extends Component {
	state = {
		tweets: [],
		mockTweet: [
			{
				username: 'Emin Muratoglu',
				text:
					'Ssumenda quia animi mollitia laboriosam non ea eveniet ducimus repellat totam dignissimos corporis alias, veniam sapiente dolor eius maiores veritatis hic beatae. ',
				date: '10-05-20',
				avatar_src: '',
				likes: 15,
				retweets: 8
			}
		]
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
		console.log(this.state.tweets);
	};

	render() {
		return (
			<div className="App">
				<NavBar />
				<div className="content__container">
					<h1 className="display-3">Twitter Showcase App</h1>
					<Routes tweets={this.state.tweets} />
				</div>
			</div>
		);
	}
}
export default App;

import React, { Component } from 'react';
import NavBar from './NavBar';
import Routes from './Routes';
import './App.css';
import axios from 'axios';

class App extends Component {
	state = {
		tweets: [
			{
				username: 'Emin Muratoglu',
				text:
					'Ssumenda quia animi mollitia laboriosam non ea eveniet ducimus repellat totam dignissimos corporis alias, veniam sapiente dolor eius maiores veritatis hic beatae. ',
				date: '10-05-20',
				avatar_src: '',
				likes: 15,
				retweets: 8
			}
		],
		api_data: ''
	};

	// componentDidMount() {
	// 	this.getTweetData();
	// }

	// getTweetData = async () => {
	// 	const res = await axios.get(`https://api.twitter.com/1.1/search/tweets.json?q=nasa`, {
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 			Accept: 'application/json',
	// 			Authorization:
	// 				'Bearer AAAAAAAAAAAAAAAAAAAAAN1IUgEAAAAADc22jrWVselAQRqU%2F3s3uQEx0QY%3DqE1GpMVdzRjuS51bvhLMqJfBZKXEGZqupG2lD250hDM8eR3KHn'
	// 		}
	// 	});
	// 	this.setState({ api_data: res });
	// };
	render() {
		return (
			<div className="App">
				<NavBar />
				<div className="content__container">
					<h1 className="display-3">Twiter Showcase App</h1>
					<Routes tweets={this.state.tweets} />
				</div>
			</div>
		);
	}
}
export default App;

// state = {
// 	tweets: [
// 		{
// 			username: 'Emin Muratoglu',
// 			text:
// 				'Ssumenda quia animi mollitia laboriosam non ea eveniet ducimus repellat totam dignissimos corporis alias, veniam sapiente dolor eius maiores veritatis hic beatae. ',
// 			date: '10-05-20',
// 			avatar_src: '',
// 			likes: 15,
// 			retweets: 8
// 		},
// 		{
// 			username: 'Someone else',
// 			text:
// 				'  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus temporibus maxime voluptatem cum eos. Voluptatem, dolor ea quidem aliquam dolore quae quia impedit, possimus dicta, ab odio nobis unde atque. Voluptatem, dolor ea quidem aliquam dolore quae quia impedit, possimus dicta, ab odio nobis unde atque.',
// 			date: '11-24-21',
// 			avatar_src: '',
// 			likes: 1750,
// 			retweets: 189
// 		},
// 		{
// 			username: 'Another cool guy',
// 			text:
// 				'  Lorem, ipsum maxime dolor sit amet consectetur adipisicing elit. Minus temporibus  voluptatem cum eos. Voluptatem, dolor ea quidem aliquam dolore quae quia impedit, possimus dicta, ab odio nobis unde atque.',
// 			date: '02-05-19',
// 			avatar_src: '',
// 			likes: 10570,
// 			retweets: 2156
// 		},
// 		{
// 			username: 'An ordinary person',
// 			text:
// 				'  Lorem, odio maxime dolor sit possimus amet consectetur adipisicing elit. Minus temporibus  voluptatem cum eos. Voluptatem, dolor ea quidem aliquam dolore quae quia impedit,  dicta quia, ab  nobis unde atque.',
// 			date: '06-09-16',
// 			avatar_src: '',
// 			likes: 65,
// 			retweets: 9
// 		}
// 	]
// };
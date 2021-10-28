import React, { Component } from 'react';
import './RandomTweet.css';
import axios from 'axios';
// import Modal from 'react-modal';
import Modal from './Modal';
import huntingImg from './images/hunting.png';
import chesscomImg from './images/chess.com.png';
import javascriptImg from './images/javascript.png';
import nbaImg from './images/nba.png';
import reactImg from './images/react.png';
import uclImg from './images/ucl.png';
import TweetByUser from './TweetByUser';

class RandomTweets extends Component {
	state = {
		tweet: ''
	};
	getRandom = (tweetsArray) => {
		return tweetsArray[Math.floor(Math.random() * tweetsArray.length)];
	};

	setAndShowTweet = async (e) => {
		const resp = await axios.get(`api/tweets/user/?searchQuery=${e.target.name}`);
		let randomTweet = this.getRandom(resp.data);
		this.setState({ tweet: randomTweet });
	};

	render() {
		return (
			<div className="randomTweet__container">
				<div className="randomTweet__header">
					<img src={huntingImg} style={{ width: '12rem' }} alt="target" />
					<div>
						<h4>Click on one of my favorite Twitter topics below</h4>
						<h4>And "catch" a random tweet!</h4>
					</div>
				</div>
				<div className="images-container">
					<img
						name="nba"
						onClick={this.setAndShowTweet}
						data-bs-toggle="modal"
						data-bs-target=".modal"
						src={nbaImg}
						alt="NBA"
					/>
					<img
						name="chess.com"
						onClick={this.setAndShowTweet}
						data-bs-toggle="modal"
						data-bs-target=".modal"
						className="chess-pic"
						src={chesscomImg}
						alt="chess.com"
					/>
					<img
						name="uefa champions league"
						onClick={this.setAndShowTweet}
						data-bs-toggle="modal"
						data-bs-target=".modal"
						src={uclImg}
						alt="ucl"
					/>
					<img
						name="reactjs"
						onClick={this.setAndShowTweet}
						data-bs-toggle="modal"
						data-bs-target=".modal"
						src={reactImg}
						alt="React"
					/>
					<img
						name="javascript"
						onClick={this.setAndShowTweet}
						data-bs-toggle="modal"
						data-bs-target=".modal"
						src={javascriptImg}
						alt="JavaScript"
					/>
				</div>
				<Modal className="modal">{this.state.tweet !== '' && <TweetByUser tweets={this.state.tweet} />}</Modal>
			</div>
		);
	}
}

export default RandomTweets;

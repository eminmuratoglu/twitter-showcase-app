import React, { Component } from 'react';
import './RandomTweet.css';
import axios from 'axios';
import Modal from './Modal';
import TweetByUser from './TweetByUser';
import Feature from './Features';
import { getRandomTweet } from './helpers';
import huntingImg from './images/hunting.png';
import chesscomImg from './images/chess.com.png';
import javascriptImg from './images/javascript.png';
import nbaImg from './images/nba.png';
import reactImg from './images/react.png';
import uclImg from './images/ucl.png';

class RandomTweets extends Component {
	state = {
		tweet: ''
	};

	setAndShowTweet = async (e) => {
		const resp = await axios.get(`api/tweets/user/?searchQuery=${e.target.name}`);
		const randomTweet = getRandomTweet(resp.data);
		this.setState({ tweet: randomTweet });
	};

	render() {
		return (
			<div className="randomTweet__container">
				<div className="randomTweet__header">
					<img src={huntingImg} className="randomTweet__header-icon" alt="target" />
					<div>
						<div className="feature-1">
							<Feature>Click on one of my favorites below</Feature>
						</div>
						<div className="feature-2">
							<Feature>And "catch" a random tweet!</Feature>
						</div>
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

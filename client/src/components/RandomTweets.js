import React, { Component } from 'react';
import './RandomTweet.css';
import axios from 'axios';
import Modal from 'react-modal';
import chesscomImg from './images/chess.com.png';
import javascriptImg from './images/javascript.png';
import nbaImg from './images/nba.png';
import reactImg from './images/react.png';
import uclImg from './images/ucl.png';
import TweetByUser from './TweetByUser';

// work on modal

class RandomTweets extends Component {
	state = {
		tweet: '',
		show: false
	};
	getRandom = (tweetsArray) => {
		return tweetsArray[Math.floor(Math.random() * tweetsArray.length)];
	};

	setAndShowTweet = async () => {
		this.setState({ show: !this.state.show });
		const resp = await axios.get(`api/tweets/user/?searchQuery=@NBA`);
		let randomTweet = this.getRandom(resp.data);
		this.setState({ tweet: randomTweet });
	};

	toggleModal = () => {
		this.setState({ show: !this.state.show });
	};

	render() {
		return (
			<div className="randomTweet__container">
				<div style={{ fontSize: '12rem' }}>🎯</div>
				<p>
					Get a random tweet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quaerat quia. Pariatur
					quas numquam tenetur eum facere doloribus iste suscipit repellendus magnam laboriosam. Repudiandae corporis
					expedita, incidunt ab unde obcaecati.
				</p>
				<div className="images-container">
					<img name="nba" onClick={this.setAndShowTweet} src={nbaImg} alt="NBA" />
					<img name="chess.com" src={chesscomImg} alt="chess.com" />
					<img name="ucl" src={uclImg} alt="ucl" />
					<img name="react" src={reactImg} alt="React" />
					<img name="js" src={javascriptImg} alt="JavaScript" />
				</div>
				{/* {this.state.tweet !== '' && <TweetByUser tweets={this.state.tweet} />} */}
				<Modal isOpen={this.state.show}>
					<button onClick={this.toggleModal}>X</button>
					{this.state.tweet !== '' && <TweetByUser tweets={this.state.tweet} />}
				</Modal>
			</div>
		);
	}
}

export default RandomTweets;

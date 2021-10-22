import React, { Component } from 'react';
import './RandomTweet.css';
import Modal from 'react-modal';
import chesscomImg from './images/chess.com.png';
import javascriptImg from './images/javascript.png';
import nbaImg from './images/nba.png';
import reactImg from './images/react.png';
import uclImg from './images/ucl.png';

class RandomTweets extends Component {
	state = {
		show: false
	};
	handleModal = () => {
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
					<img onClick={this.handleModal} src={nbaImg} alt="NBA" />
					<img className="chess-pic" src={chesscomImg} alt="chess.com" />
					<img src={uclImg} alt="ucl" />
					<img src={reactImg} alt="React" />
					<img src={javascriptImg} alt="JavaScript" />
				</div>
				<Modal isOpen={this.state.show}>
					<button onClick={this.handleModal}>X</button>
					<p>
						Get a random tweet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quaerat quia. Pariatur
						quas numquam tenetur eum facere doloribus iste suscipit repellendus magnam laboriosam. Repudiandae corporis
						expedita, incidunt ab unde obcaecati.
					</p>
				</Modal>
			</div>
		);
	}
}

export default RandomTweets;

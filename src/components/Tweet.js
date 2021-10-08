import React from 'react';
import './Tweet.css';
import retweetIcon from './images/retweet.png';
import avatar from './images/avatar.png';

function Tweet(props) {
	return props.tweets.map((tw) => {
		return (
			<div className="tweet__container" key={tw.text}>
				<div className="tweet__header">
					<img className="tweet__avatar" src={avatar} alt="avatar" />
					<p className="tweet__username">{tw.username}</p>
				</div>
				<p className="tweet__text">{tw.text}</p>
				<div className="tweet__stats">
					<p className="tweet__stats-likes"> ❤️ {tw.likes}</p>
					<div className="tweet__stats-retweet">
						<img src={retweetIcon} alt="retweet" />
						<span> {tw.retweets}</span>
					</div>
				</div>
				<p className="tweet__date">{tw.date}</p>
			</div>
		);
	});
}

export default Tweet;
//style={{ fontSize: '2rem' }}

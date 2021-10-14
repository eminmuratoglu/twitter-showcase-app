import React, { Component } from 'react';
import './Tweet.css';
import retweetIcon from './images/retweet.png';
// import avatar from './images/avatar.png';

class Tweet extends Component {
	formatDate = (date) => {
		return `${date.split(' ').slice(1, 3).join(' ')} ${date.slice(-4)}`;
	};

	render() {
		return (
			<div>
				{this.props.tweets.map((tw) => {
					return (
						<div className="tweet__container" key={tw.id}>
							<div className="tweet__header">
								<img className="tweet__avatar" src={tw.user.profile_image_url} alt="avatar" />
								<p className="tweet__username">{tw.user.name}</p>
							</div>
							<p className="tweet__text">{tw.text}</p>
							<div className="tweet__stats">
								<p className="tweet__stats-likes"> ❤️ {tw.favorite_count}</p>
								<div className="tweet__stats-retweet">
									<img src={retweetIcon} alt="retweet" />
									<span> {tw.retweet_count}</span>
								</div>
							</div>
							<p className="tweet__date">{this.formatDate(tw.created_at)}</p>
						</div>
					);
				})}
			</div>
		);
	}
}

export default Tweet;

import React from 'react';
import retweetIcon from './images/retweet.png';

function TweetUser(props) {
	const { tweets: tw } = props;
	return (
		<div>
			<div className="tweet__container">
				<div className="tweet__header">
					<img className="tweet__avatar" src={tw.profile_image_url} alt="avatar" />
					<div>
						<p className="tweet__username">
							{tw.name} <span className="tweet__username screen-name">@{tw.screen_name}</span>
						</p>
					</div>
				</div>
				<p className="tweet__text">{tw.status.text}</p>
				<div className="tweet__stats">
					<p className="tweet__stats-likes"> ❤️ {tw.status.favorite_count}</p>
					<div className="tweet__stats-retweet">
						<img src={retweetIcon} alt="retweet" />
						<span> {tw.status.retweet_count}</span>
					</div>
				</div>
				<p className="tweet__date">date here</p>
				{/* <p className="tweet__date">{this.formatDate(tw.status.created_at)}</p> */}
			</div>
		</div>
	);
}

export default TweetUser;

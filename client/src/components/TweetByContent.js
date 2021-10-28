import React, { Component } from 'react';
import './Tweet.css';
import retweetIcon from './images/retweet.png';
import { getMediaEl, formatDate } from './helpers';

function TweetByContent(props) {
	const { tweets: tw } = props;
	return (
		<div>
			<div className="tweet__container">
				<div className="tweet__header">
					<img className="tweet__avatar" src={tw.user.profile_image_url} alt="avatar" />
					<div>
						<p className="tweet__username">
							{tw.user.name} <span className="tweet__username screen-name">@{tw.user.screen_name}</span>
						</p>
					</div>
				</div>
				<div className="tweet__body">
					<p>{tw.full_text}</p>
					<div>{getMediaEl(tw)}</div>
				</div>
				<div className="tweet__stats">
					<p className="tweet__stats-likes"> ❤️ {tw.favorite_count}</p>
					<div className="tweet__stats-retweet">
						<img src={retweetIcon} alt="retweet" />
						<span> {tw.retweet_count}</span>
					</div>
				</div>
				<p className="tweet__date">{formatDate(tw.created_at)}</p>
			</div>
		</div>
	);
}
export default TweetByContent;

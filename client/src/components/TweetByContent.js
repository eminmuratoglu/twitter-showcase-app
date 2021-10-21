import React, { Component } from 'react';
import './Tweet.css';
import retweetIcon from './images/retweet.png';

class Tweet extends Component {
	formatDate = (date) => {
		return `${date.split(' ').slice(1, 3).join(' ')} ${date.slice(-4)}`;
	};

	render() {
		const { tweets: tw } = this.props;
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
			</div>
		);
	}
}

export default Tweet;

{
	/* <div className="tweet__container" key={tw.id}>
	<div className="tweet__header">
		<img
			className="tweet__avatar"
			src={tw.user.profile_image_url ? tw.user.profile_image_url : tw.profile_image_url}
			alt="avatar"
		/>
		<div>
			<p className="tweet__username">
				{tw.user.name ? tw.user.name : tw.name}{' '}
				<span className="tweet__username screen-name">
					@{tw.user.screen_name ? tw.user.screen_name : tw.screen_name}
				</span>
			</p>
		</div>
	</div>
	<p className="tweet__text">{tw.text ? tw.text : tw.status.text}</p>
	<div className="tweet__stats">
		<p className="tweet__stats-likes"> ❤️ {tw.favorite_count ? tw.favorite_count : tw.status.favorite_count}</p>
		<div className="tweet__stats-retweet">
			<img src={retweetIcon} alt="retweet" />
			<span> {tw.retweet_count ? tw.retweet_count : tw.status.retweet_count}</span>
		</div>
	</div>
	<p className="tweet__date">{this.formatDate(tw.created_at)}</p>
</div>; */
}

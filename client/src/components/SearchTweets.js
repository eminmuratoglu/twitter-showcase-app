import React, { Component } from 'react';
import LoadingSpinner from './LoadingSpinner';
import './SearchTweet.css';
import Feature from './Features';
import TweetByContent from './TweetByContent';
import TweetByUser from './TweetByUser';
import searchPicturePng from './images/search-picture.png';

class SearchTweets extends Component {
	state = {
		searchQuery: '',
		isLoading: false,
		isNoResult: ''
	};

	handleChange = (e) => {
		this.setState({ searchQuery: e.target.value });
	};

	isNoResult = (tweets) => {
		!tweets.length > 0 ? this.setState({ isNoResult: true }) : this.setState({ isNoResult: false });
	};

	handleSearchByContent = (e) => {
		e.preventDefault();
		this.state.searchQuery.length > 0 && this.setState({ isLoading: true });
		this.props.getTweetsByContent(`api/tweets/content/?searchQuery=${this.state.searchQuery}`, () => {
			this.isNoResult(this.props.tweetsByContent);
			this.setState({ isLoading: false });
		});
	};

	handleSearchByUser = (e) => {
		e.preventDefault();
		this.state.searchQuery.length > 0 && this.setState({ isLoading: true });
		this.props.getTweetsByUser(`api/tweets/user/?searchQuery=${this.state.searchQuery}`, () => {
			this.isNoResult(this.props.tweetsByUser);
			this.setState({ isLoading: false });
		});
	};

	render() {
		let renderTweetsByUser = this.props.tweetsByUser.map((tw) => {
			return <TweetByUser key={tw.id} tweets={tw} />;
		});
		let renderTweetsByContent = this.props.tweetsByContent.map((tw) => {
			return <TweetByContent key={tw.id} tweets={tw} />;
		});
		return (
			<div className="searchtweet__container">
				<div className="searchTweet__header">
					<img src={searchPicturePng} className="search__icon" alt="search" />
					<div>
						<div className="feature-1">
							<Feature>Search for tweets either by a user or by tweet content!</Feature>
						</div>
						<div className="feature-2">
							<Feature>And hunt down a number of tweets related to the search!</Feature>
						</div>
					</div>
				</div>
				<form className="form-group">
					<input
						className="form-control"
						type="search"
						placeholder="Search"
						aria-label="Search"
						onChange={this.handleChange}
					/>
					<div className="btns-container">
						<button className="btn btn-1 btn-primary " type="submit" onClick={this.handleSearchByContent}>
							Search By Content
						</button>
						<button className="btn btn-2 btn-primary " type="submit" onClick={this.handleSearchByUser}>
							Search By User
						</button>
					</div>
				</form>
				{!this.state.isLoading && this.state.isNoResult && <h5>No result!</h5>}

				{this.state.isLoading ? (
					<LoadingSpinner />
				) : (
					[
						this.state.isNoResult !== true && renderTweetsByContent,
						this.state.isNoResult !== true && renderTweetsByUser
					]
				)}
			</div>
		);
	}
}
export default SearchTweets;

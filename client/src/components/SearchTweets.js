import React, { Component } from 'react';
import LoadingSpinner from './LoadingSpinner';
import './SearchTweet.css';
import searchPicturePng from './images/search-picture.png';
import TweetByContent from './TweetByContent';
import TweetByUser from './TweetByUser';

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

	//try refactoring these two functions

	handleSearchByContent = (e) => {
		e.preventDefault();
		this.setState({ isLoading: true });
		this.props.getTweetsByContent(`api/tweets/content/?searchQuery=${this.state.searchQuery}`, () => {
			this.isNoResult(this.props.tweetsByContent);
			this.setState({ isLoading: false });
		});
	};

	handleSearchByUser = (e) => {
		e.preventDefault();
		this.setState({ isLoading: true });
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
						<h4>Search for tweets either by a user or by tweet content!</h4>
						<h4>And hunt down a number of tweets related to the search!</h4>
					</div>
				</div>
				<form className="form-group d-flex gap-1 my-lg-5 my-sm-1">
					<input
						className="form-control mr-sm-2"
						type="search"
						placeholder="Search"
						aria-label="Search"
						onChange={this.handleChange}
					/>
					<button
						className="btn btn-primary my-2 my-sm-0"
						type="submit"
						onClick={this.handleSearchByContent}
						style={{ whiteSpace: 'nowrap' }}
					>
						Search By Content
					</button>
					<button
						className="btn btn-primary my-2 my-sm-0"
						type="submit"
						onClick={this.handleSearchByUser}
						style={{ whiteSpace: 'nowrap' }}
					>
						Search By User
					</button>
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

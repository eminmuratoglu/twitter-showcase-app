import React, { Component } from 'react';
import searchPicturePng from './images/search-picture.png';
import TweetByContent from './TweetByContent';
import TweetByUser from './TweetByUser';

class SearchTweets extends Component {
	state = {
		searchQuery: ''
	};

	handleChange = (e) => {
		this.setState({ searchQuery: e.target.value }, () => {
			this.props.getSearchQuery(this.state.searchQuery);
		});
	};

	handleSearchByContent = (e) => {
		e.preventDefault();
		this.props.getTweetsByContent();
	};

	handleSearchByUser = (e) => {
		e.preventDefault();
		this.props.getTweetsByUser();
	};

	render() {
		// let renderTweetsByUser, renderTweetsByContent;
		// const notFoundMsg = <h5>Search result not found! Please try another!</h5>;
		// if (this.props.tweetsByUser.length > 0) {
		// 	renderTweetsByUser = this.props.tweetsByUser.map((tw) => {
		// 		return <TweetByUser key={tw.id} tweets={tw} />;
		// 	});
		// } else {
		// 	renderTweetsByUser = notFoundMsg;
		// }
		// if (this.props.tweetsByContent.length > 0) {
		// 	renderTweetsByContent = this.props.tweetsByContent.map((tw) => {
		// 		return <TweetByContent key={tw.id} tweets={tw} />;
		// 	});
		// } else {
		// 	renderTweetsByContent = notFoundMsg;
		// }

		let renderTweetsByUser = this.props.tweetsByUser.map((tw) => {
			return <TweetByUser key={tw.id} tweets={tw} />;
		});
		let renderTweetsByContent = this.props.tweetsByContent.map((tw) => {
			return <TweetByContent key={tw.id} tweets={tw} />;
		});
		return (
			<div className="searchtweet__container">
				<div className="d-flex justify-content-center align-items-center my-5">
					<img src={searchPicturePng} className="search__icon" style={{ width: '8rem' }} alt="search" />
					<h4>Search for tweets either by a user or by tweet content!</h4>
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
						type="button"
						onClick={this.handleSearchByUser}
						style={{ whiteSpace: 'nowrap' }}
					>
						Search By User
					</button>
					<button
						className="btn btn-primary my-2 my-sm-0"
						type="button"
						onClick={this.handleSearchByContent}
						style={{ whiteSpace: 'nowrap' }}
					>
						Search By Content
					</button>
				</form>
				{renderTweetsByContent}
				{renderTweetsByUser}
			</div>
		);
	}
}
export default SearchTweets;

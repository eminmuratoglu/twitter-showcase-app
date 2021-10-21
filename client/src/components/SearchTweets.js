import React, { Component } from 'react';
import axios from 'axios';
import searchPicturePng from './images/search-picture.png';
import TweetByContent from './TweetByContent';
import TweetByUser from './TweetByUser';

class SearchTweets extends Component {
	state = {
		tweets: [],
		searchQuery: '',
		searchType: ''
	};

	// handleChange = (e) => {
	// 	this.setState({ searchQuery: e.target.value }, () => {
	// 		this.props.getSearchQuery(this.state.searchQuery);
	// 	});
	// };
	handleSearchClick = () => {
		this.getTweet();
		this.setState({ searchQuery: '' });
	};

	handleSearchByContent = (e) => {
		e.preventDefault();
		this.setState({ searchType: 'content' }, this.handleSearchClick);
	};

	handleSearchByUser = (e) => {
		e.preventDefault();
		this.setState({ searchType: 'user' }, this.handleSearchClick);
	};

	getTweet = async () => {
		const { searchQuery, searchType } = this.state;
		const response = await axios.get(`api/tweets/${searchType}?searhQuery=${searchQuery}`);
		this.setState({ tweets: response.data });
	};

	render() {
		let renderResult = this.state.tweets.map((tw) => {
			if (this.state.searchType == 'content') {
				return <TweetByContent key={tw.id} tweets={tw} />;
			} else if (this.state.searchType == 'user') {
				return <TweetByUser key={tw.id} tweets={tw} />;
			}
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
						value={this.state.searchQuery}
						onChange={(e) => this.setState({ searchQuery: e.target.value })}
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
				{/* {this.state.searchType === 'content' ? 'content' : this.state.searchType === 'user' ? 'user' : <div />} */}
				{/* {this.state.tweets.map((tw) => {
					return this.state.searchType === 'content' ? (
						<TweetByContent key={tw.id} tweets={tw} />
					) : this.state.searchType === 'user' ? (
						<TweetByUser key={tw.id} tweets={tw} />
					) : null;
				})} */}
				{renderResult}
			</div>
		);
	}
}
export default SearchTweets;

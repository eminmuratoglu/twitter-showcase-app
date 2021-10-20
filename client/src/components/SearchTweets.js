import React, { Component } from 'react';
import Tweet from './Tweet';
import searchPicturePng from './images/search-picture.png';
import TweetUser from './TweetUser';

class SearchTweets extends Component {
	state = {
		tweets: [],
		searchQuery: '',
		searchType: ''
	};
	handleChange = (e) => {
		this.setState({ searchQuery: e.target.value }, () => {
			this.props.getSearchQuery(this.state.searchQuery);
		});
	};
	handleSearchClick = () => {
		this.props.getTweet(this.state.searchType);
		this.setState({ searchQuery: '' });
	};
	handleSearchByUser = (e) => {
		e.preventDefault();
		this.setState({ searchType: 'user' }, () => this.handleSearchClick());
	};
	handleSearchByContent = (e) => {
		e.preventDefault();
		this.setState({ searchType: 'content' }, () => this.handleSearchClick());
	};
	render() {
		return (
			<div className="searchtweet__container">
				<div className="d-flex justify-content-center align-items-center my-5">
					<img src={searchPicturePng} className="search__icon" style={{ width: '8rem' }} alt="search" />
					<h4>Search for tweets either by a user or a topic!</h4>
				</div>
				<form className="form-group d-flex gap-1 my-lg-5 my-sm-1">
					<input
						className="form-control mr-sm-2"
						type="search"
						placeholder="Search"
						aria-label="Search"
						value={this.state.searchQuery}
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
						Search By Subject
					</button>
				</form>
				{this.state.searchType === 'content' ? (
					<Tweet tweets={this.props.tweets} searchType={this.state.searchType} />
				) : this.state.searchType === 'user' ? (
					<TweetUser />
				) : (
					<div />
				)}

				{/* <Tweet tweets={this.props.tweets} searchType={this.state.searchType} /> */}
			</div>
		);
	}
}
export default SearchTweets;

import React, { Component } from 'react';
import Tweet from './Tweet';
import axios from 'axios';
import searchPicturePng from './images/search-picture.png';

class SearchTweets extends Component {
	state = {
		searchQuery: ''
	};
	handleChange = (e) => {
		this.setState(
			{
				searchQuery: e.target.value
			},
			() => {
				this.props.getSearchQuery(this.state.searchQuery);
			}
		);
	};
	handleSearchByContentClick = (e) => {
		e.preventDefault();
		axios
			.post('/api/query', this.state.searchQuery)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err));
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
						onChange={this.handleChange}
					/>
					<button className="btn btn-primary my-2 my-sm-0" type="button" style={{ whiteSpace: 'nowrap' }}>
						Search By User
					</button>
					<button
						className="btn btn-primary my-2 my-sm-0"
						type="button"
						onClick={this.handleSearchByContentClick}
						style={{ whiteSpace: 'nowrap' }}
					>
						Search By Subject
					</button>
				</form>
				<Tweet tweets={this.props.tweets} />
			</div>
		);
	}
}
export default SearchTweets;

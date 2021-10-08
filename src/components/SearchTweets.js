import React, { Component } from 'react';
import Tweet from './Tweet';
import searchPicturePng from './images/search-picture.png';

class SearchTweets extends Component {
	render() {
		return (
			<div className="searchtweet__container">
				<div className="d-flex justify-content-center align-items-center my-5">
					<img src={searchPicturePng} className="search__icon" style={{ width: '8rem' }} alt="search" />
					<h4>Search for tweets either by a user or a topic!</h4>
				</div>
				<form className="form-group d-flex gap-1 my-lg-5 my-sm-1">
					<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
					<button className="btn btn-primary my-2 my-sm-0" type="button" style={{ whiteSpace: 'nowrap' }}>
						Search By User
					</button>
					<button className="btn btn-primary my-2 my-sm-0" type="button" style={{ whiteSpace: 'nowrap' }}>
						Search By Subject
					</button>
				</form>
				<Tweet tweets={this.props.tweets} />
			</div>
		);
	}
}

export default SearchTweets;

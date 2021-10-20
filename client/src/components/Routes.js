import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchTweets from './SearchTweets';
import RandomTweets from './RandomTweets';

function Routes(props) {
	return (
		<Switch>
			<Route
				exact
				path="/searchtweets"
				render={() => (
					<SearchTweets
						tweets={props.tweets}
						getTweet={props.getTweet}
						getSearchQuery={props.getSearchQuery}
						// getSearchType={props.getSearchType}
					/>
				)}
			/>
			<Route exact path="/randomtweets" render={() => <RandomTweets />} />
		</Switch>
	);
}

export default Routes;

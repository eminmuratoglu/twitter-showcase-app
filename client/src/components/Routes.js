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
					// tweets={props.tweets}
					// getSearchQuery={props.getSearchQuery}
					// getTweetsByContent={props.getTweetsByContent}
					// getTweetsByUser={props.getTweetsByUser}
					// searchType={props.searchType}
					/>
				)}
			/>
			<Route exact path="/randomtweets" render={() => <RandomTweets />} />
		</Switch>
	);
}

export default Routes;

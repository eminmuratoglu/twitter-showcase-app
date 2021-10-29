import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import SearchTweets from './SearchTweets';
import RandomTweets from './RandomTweets';

function Routes(props) {
	return (
		<Switch>
			<Route exact path="/" render={() => <Home />} />
			<Route
				exact
				path="/searchtweets"
				render={() => (
					<SearchTweets
						tweetsByContent={props.tweetsByContent}
						tweetsByUser={props.tweetsByUser}
						getTweetsByContent={props.getTweetsByContent}
						getTweetsByUser={props.getTweetsByUser}
					/>
				)}
			/>
			<Route
				exact
				path="/randomtweets"
				render={() => <RandomTweets getTweetsByUser={props.getTweetsByUser} tweetsByUser={props.tweetsByUser} />}
			/>
		</Switch>
	);
}

export default Routes;

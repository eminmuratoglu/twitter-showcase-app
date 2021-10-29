const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();
const axios = require('axios');

const port = 3000;

app.use('/', express.static(path.join(__dirname, 'client/build')));

const getResponse = async (url) => {
	const response = await axios.get(url, {
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: process.env.TWITTER_AUTH_BEARER_TOKEN
		}
	});
	return response;
};

app.get('/api/tweets/content', async (req, res) => {
	const { searchQuery } = req.query;
	const response = await getResponse(
		`https://api.twitter.com/1.1/search/tweets.json?tweet_mode=extended&q=${searchQuery}&result_type=popular&lang=en&count=10`
	);
	res.send(response.data.statuses);
});

app.get('/api/tweets/user', async (req, res) => {
	const { searchQuery } = req.query;
	const response = await getResponse(
		`https://api.twitter.com/1.1/users/search.json?tweet_mode=extended&q=${searchQuery}&result_type=popular&lang=en&count=10`
	);
	res.send(response.data);
});

app.listen(port);

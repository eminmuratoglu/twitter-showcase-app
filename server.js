const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();
const axios = require('axios');
// const bodyParser = require('body-parser'); // to be deleted

const port = 3000;

app.use('/', express.static(path.join(__dirname, 'client/build')));

app.get('/api/tweets/content', async (req, res) => {
	try {
		let { searchQuery } = req.query;
		let response = await axios.get(
			`https://api.twitter.com/1.1/search/tweets.json?tweet_mode=extended&q=${searchQuery}&result_type=popular&lang=en&count=10`,
			{
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					Authorization: process.env.TWITTER_AUTH_BEARER_TOKEN
				}
			}
		);
		res.send(response.data.statuses);
	} catch (err) {
		console.log(err);
	}
});

app.get('/api/tweets/user', async (req, res) => {
	try {
		const { searchQuery } = req.query;
		const response = await axios.get(
			`https://api.twitter.com/1.1/users/search.json?tweet_mode=extended&q=${searchQuery}&result_type=popular&lang=en&count=10`,
			{
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					Authorization: process.env.TWITTER_AUTH_BEARER_TOKEN
				}
			}
		);
		res.send(response.data);
	} catch (err) {
		console.log(err);
	}
});

app.listen(port);

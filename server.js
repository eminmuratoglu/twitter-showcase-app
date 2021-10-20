const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');

const port = 3000;

app.use('/', express.static(path.join(__dirname, 'client/build')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/api/tweets', async (req, res) => {
	let { searchQuery, searchType } = req.query;
	let url;
	if (searchType === 'content') {
		url = `https://api.twitter.com/1.1/search/tweets.json?q=${searchQuery}&result_type=popular&lang=en`;
	} else if (searchType === 'user') {
		url = `https://api.twitter.com/1.1/users/search.json?q=${searchQuery}`;
	}
	console.log(searchQuery, searchType);
	const response = await axios.get(url, {
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: process.env.TWITTER_AUTH_BEARER_TOKEN
		}
	});
	let tweets;
	if (searchType === 'content') tweets = response.data.statuses;
	if (searchType === 'user') tweets = response.data;
	res.send(tweets);
});
// search by user
// https://api.twitter.com/1.1/users/search.json?q=soccer

app.listen(port);

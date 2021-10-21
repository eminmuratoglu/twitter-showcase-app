const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();
const axios = require('axios');
// const bodyParser = require('body-parser'); // to be deleted

const port = 3000;

app.use('/', express.static(path.join(__dirname, 'client/build')));

app.get('/api/tweets/content', async (req, res) => {
	let { searchQuery } = req.query;
	let response = await axios.get(
		`https://api.twitter.com/1.1/search/tweets.json?q=${searchQuery}&result_type=popular&lang=en`,
		{
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: process.env.TWITTER_AUTH_BEARER_TOKEN
			}
		}
	);
	res.send(response.data.statuses);
});

app.get('/api/tweets/user', async (req, res) => {
	const { searchQuery } = req.query;
	const response = await axios.get(`https://api.twitter.com/1.1/users/search.json?q=${searchQuery}`, {
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: process.env.TWITTER_AUTH_BEARER_TOKEN
		}
	});
	res.send(response.data);
});

app.listen(port);

// app.get('/api/tweets', async (req, res) => {
// 	let { searchQuery, searchType } = req.query;
// 	let url, tweets;
// 	if (searchType === 'content') {
// 		url = `https://api.twitter.com/1.1/search/tweets.json?q=${searchQuery}&result_type=popular&lang=en`;
// 	} else if (searchType === 'user') {
// 		url = `https://api.twitter.com/1.1/users/search.json?q=${searchQuery}`;
// 	}
// 	console.log('query:', searchQuery, '| type:', searchType);
// 	const response = await axios.get(url, {
// 		headers: {
// 			'Content-Type': 'application/json',
// 			Accept: 'application/json',
// 			Authorization: process.env.TWITTER_AUTH_BEARER_TOKEN
// 		}
// 	});
// 	if (searchType === 'content') tweets = response.data.statuses;
// 	if (searchType === 'user') tweets = response.data;
// 	res.send(tweets);
// });
// search by user
// https://api.twitter.com/1.1/users/search.json?q=soccer

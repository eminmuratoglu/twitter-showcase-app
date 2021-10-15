const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();
const axios = require('axios');
const bodyParser = require('body-parser');

const port = 3000;

app.use('/', express.static(path.join(__dirname, 'client/build')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post('/api/query', (req, res) => {
	res.send(req.body);
});

app.get('/api/tweets', async (req, res) => {
	// let query = (await axios.get('api/query')).searchQuery;
	const resp = await axios.get(`https://api.twitter.com/1.1/search/tweets.json?q=bowling&result_type=popular`, {
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: process.env.TWITTER_AUTH_BEARER_TOKEN
		}
	});
	const tweets = resp.data.statuses;

	res.send(tweets);
});

// search by user
// https://api.twitter.com/1.1/users/search.json?q=soccer

app.listen(port);

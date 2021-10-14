const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');

const port = 3000;

app.use('/', express.static(path.join(__dirname, 'client/build')));

app.get('/api/tweets', async (req, res) => {
	const resp = await axios.get(`https://api.twitter.com/1.1/search/tweets.json?q=chess&result_type=popular`, {
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization:
				'Bearer AAAAAAAAAAAAAAAAAAAAAN1IUgEAAAAADc22jrWVselAQRqU%2F3s3uQEx0QY%3DqE1GpMVdzRjuS51bvhLMqJfBZKXEGZqupG2lD250hDM8eR3KHn'
		}
	});
	const tweets = resp.data.statuses;
	res.send(tweets);
});

// search by user
// https://api.twitter.com/1.1/users/search.json?q=soccer

app.listen(port);

// in server, make a request to twitter to retrieve data
// in react, make a request to your server to get tweet data which already received from twitter.

// question 1: localhost:3000/api/tweets renders the api to the page naturally. Is this supposed be like this?

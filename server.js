const express = require('express');
const path = require('path');
const app = express();
const fetch = require('node-fetch');
const axios = require('axios');

const port = 3000;

app.use('/', express.static(path.join(__dirname, 'client/build')));

app.get('/api/tweets', async (req, res) => {
	// res.send(tweets);
	const resp = await axios.get('https://swapi.co/api/people/1');
	res.send(resp.data);

	// await fetch('https://swapi.co/api/people/1').then((response) => response.json()).then((data) => res.send(data));
});

app.listen(port);

// in server, make a request to twitter to retrieve data
// in react, make a request to your server to get tweet data which already received from twitter.

const tweets = [
	{
		username: 'Someone else',
		text:
			'  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus temporibus maxime voluptatem cum eos. Voluptatem, dolor ea quidem aliquam dolore quae quia impedit, possimus dicta, ab odio nobis unde atque. Voluptatem, dolor ea quidem aliquam dolore quae quia impedit, possimus dicta, ab odio nobis unde atque.',
		date: '11-24-21',
		avatar_src: '',
		likes: 1750,
		retweets: 189
	},
	{
		username: 'An ordinary person',
		text:
			'  Lorem, odio maxime dolor sit possimus amet consectetur adipisicing elit. Minus temporibus  voluptatem cum eos. Voluptatem, dolor ea quidem aliquam dolore quae quia impedit,  dicta quia, ab  nobis unde atque.',
		date: '06-09-16',
		avatar_src: '',
		likes: 65,
		retweets: 9
	}
];

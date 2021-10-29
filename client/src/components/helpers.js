export function getMediaEl(tw) {
	if (tw.extended_entities) {
		let media = tw.extended_entities.media[0];
		if (media.type === 'photo') {
			return <img src={media.media_url} width="300" />;
		} else if (media.type === 'video') {
			function filterAndGetSmallestMp4() {
				return media.video_info.variants
					.filter((v) => v.content_type === 'video/mp4')
					.sort((a, b) => a.bitrate > b.bitrate)[0].url;
			}
			return <video src={filterAndGetSmallestMp4()} width="320" height="240" controls="controls" />;
		}
	}
}

export function formatDate(date) {
	return `${date.split(' ').slice(1, 3).join(' ')} ${date.slice(-4)}`;
}

export function getRandomTweet(tweetsArray) {
	return tweetsArray[Math.floor(Math.random() * tweetsArray.length)];
}

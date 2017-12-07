var FeedParser = require('feedparser');
var request = require('request');
var PodcastItem = require('./PodcastItem');
const parsePodcast = require('node-podcast-parser');

module.exports = class RSSParser {
  constructor(feedId, url) {
    this.feedId = feedId;
    this.url = url;
  }

  getData(callback) {
    request(this.url, (err, res, data) => {
      if (err) {
        console.error('Network error', err);
        return;
      }

      parsePodcast(data, (err, data) => {
        if (err) {
          console.error('Parsing error', err);
          return;
        }
        callback(data);
      });
    });
  }
}

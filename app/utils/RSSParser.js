var FeedParser = require('feedparser');
var request = require('request');
var PodcastItem = require('./PodcastItem');

module.exports = class RSSParser {
  constructor(feedId, url) {
    this.feedId = feedId;
    this.url = url;
  }

  getMeta(callback){
    var feedparser = new FeedParser([]);
    var req = request(this.url);

    req.on('error', function (error) {
      // handle any request errors
    });

    req.on('response', function (res) {
      var stream = this;

      if (res.statusCode !== 200) {
        this.emit('error', new Error('Bad status code'));
      }
      else {
        stream.pipe(feedparser);
      }
    });

    feedparser.on('error', function (error) {
      // always handle errors
    });

    feedparser.on('readable', function () {
      var stream = this;
      var meta = this.meta;
      var item;
      callback(meta);
    });
  }

  getItems(callback) {
    var feedparser = new FeedParser([]);
    var req = request(this.url);

    req.on('error', function (error) {
      // handle any request errors
    });

    req.on('response', function (res) {
      var stream = this;

      if (res.statusCode !== 200) {
        this.emit('error', new Error('Bad status code'));
      }
      else {
        stream.pipe(feedparser);
      }
    });

    feedparser.on('error', function (error) {
      // always handle errors
    });

    feedparser.on('readable', function () {
      var stream = this;
      var meta = this.meta;
      var item;
      while (item = stream.read()) {
        callback(new PodcastItem(item))
      }
    });

  }
}

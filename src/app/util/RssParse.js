import Parser from 'rss-parser';
import FeedController from '../controllers/FeedController';


const parser = new Parser()

class RssParse {
  async parseUrls(urls) {
    const feeds = [];

    for (let i = 0; i < urls.length; i++){
      const feed = await parser.parseURL(urls[i]);
      feeds.push(feed)
    }

    await FeedController.store(feeds);
  }
}

export default new RssParse();
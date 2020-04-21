import Feed from '../models/Feed'

class FeedController { 
  async store(feeds){

    const items = feeds[0].items;
    for (let i = 0; i < items.length; i ++){

      const feed = items[i];

      let text = (feed.contentSnippet.length > 255) ? feed.contentSnippet.substring(0,254) : feed.contentSnippet;

      const inserted = await Feed.create({
        title: feed.title,
        link: feed.guid,
        content: text,
        publishing_date: feed.pubDate
      });
    }    
  }
}

export default new FeedController();
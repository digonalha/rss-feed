import RssParse from './app/util/RssParse'
import './database';

const urls = [
  'https://feeds2.feedburner.com/canaltechbr'
]

RssParse.parseUrls(urls);

import Sequelize, { Model } from 'sequelize';

class Feed extends Model {
  static init(sequelize) {
    super.init({
      title: Sequelize.STRING,
      link: Sequelize.STRING,
      content: Sequelize.STRING,
      publishing_date: Sequelize.STRING,
    },
    {
      sequelize
    });

    return this;
  }
}

export default Feed;
import Sequelize from 'sequelize';
import dbConfig from '../config/database'
import Feed from '../app/models/Feed'
//models abaixo

const models = [Feed] // < -- models

class Database { 
  constructor() {
    this.init();
  }

  init(){
    this.connection = new Sequelize(dbConfig);
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
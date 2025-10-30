import { Sequelize } from "sequelize"

class Database {
  constructor() {
    this.init()
  }

  init() {
    // .env - dotenv (pesquisar sobre)
    this.db = new Sequelize({
      database: 'exemplo',
      host: 'localhost',
      username: 'root',
      password: '',
      dialect: 'mysql'
    })
  }
}

export default new Database()
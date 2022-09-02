const connection = require('../../../api/config/mysqlConnection')

const listAllAnimals = async () => {
  let animals

  animals = await connection.query('SELECT * FROM animals')

  return animals[0]
}

module.exports = {
  listAllAnimals
}

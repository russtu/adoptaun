const mysqlAnimalsRepository = require('../../../modules/animals/repository/mysqlAnimalsRepository')


const getAllAnimals = async (req, res) => {

  let animals
  try {
    animals = await mysqlAnimalsRepository.listAllAnimals()
  } catch (error) {
    res.status(500)
    res.end(error.message)
    return
  }
  res.status(200)
  res.send(animals)
}
module.exports = getAllAnimals
const mysqlAnimalsSheltersRepository = require('../../../modules/animalShelters/repository/mysqlAnimalsSheltersRepository')
const crypto = require("crypto")
const bcrypt = require('bcrypt')
require('dotenv').config()

const { SALT_ROUNDS } = process.env


const postAnimalsShelters = async (req, res) => {
  const animalsSheltersData = req.body


let userExists
try {
    userExists = await mysqlAnimalsSheltersRepository.animalsSheltersExists(animalsSheltersData)
} catch (error) {
    res.status(500)
    res.end(error.message)
    return
}


let encryptedPassword

try {
    encryptedPassword = await bcrypt.hash(animalsSheltersData.password, Number(SALT_ROUNDS))
} catch (error) {
    res.status(500)
    res.end('Unexpected error')
    return
}
const registrationCode = crypto.randomBytes(50).toString('hex')

let savedUser
try {
    savedUser = await mysqlAnimalsSheltersRepository.saveAnimalsShelter({ ...animalsSheltersData, password: encryptedPassword, registrationCode })
} catch (error) {
    res.status(500)
    res.end(error.message)
    return
}


res.status(200)
res.send(JSON.stringify('animals shelter registered succesfully'))

}
module.exports = postAnimalsShelters
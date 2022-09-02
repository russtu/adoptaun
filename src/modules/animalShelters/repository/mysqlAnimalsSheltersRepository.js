const connection = require('../../../api/config/mysqlConnection')

const saveAnimalsShelter = async (animalsSheltersData) => {
  const { email, password, name, address, phone_number, description, role, registrationCode } = animalsSheltersData
  const created_at = new Date()
  const animalsShelter = await connection.query('INSERT INTO animals_shelters ( email, password, name, address, phone_number, description, role, recover_code, created_at ) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ? )', [email, password, name, address, phone_number, description, role, registrationCode, created_at])
  const animalsShelterSaved = {...animalsSheltersData, id:animalsShelter.insertId}
  return (animalsShelterSaved)
}

const animalsSheltersExists = async (animalsSheltersData) => {
  const result = await connection.query("SELECT * FROM animals_shelters WHERE email = ?", [animalsSheltersData.email])

  if (!!result[0].length) {
    throw new Error('Animals Shelters already exists')
  }
  return
}

module.exports = {
  saveAnimalsShelter,
  animalsSheltersExists
}

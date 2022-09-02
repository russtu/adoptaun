const express = require('express')
const { getAllAnimals } = require('./animals')
const { postAnimalsShelters } = require('./animalShelters')

const router = require('express').Router()



//ANIMALS

router.get('/animals', getAllAnimals)


//ANIMALS SHELTERS

router.post('/animalsShelters', postAnimalsShelters)

//PHOTOS ANIMALS

//PHOTOS SHELTERS

module.exports = router
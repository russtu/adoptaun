# ADOPTAUN   API

## INTRODUCTION

-  Se trata de una api de listado de animales en adopción y las protectoras que los cuidan hasta ser adoptados donde se pueden añadir , borrar , consultar o modificar animales y asi como los datos de las distintas protectoras.
-  It is an api for the list of animals for adoption and the protectors that care for them until they are adopted, where animals can be added, deleted, consulted or modified, as well as the data of the different protectors.

## REQUIREMENTS

-  no specially requirements

## INSTALLATION

-  only:  npm install

## BDD / DB

  ### TABLES

  #### AnimalShelter

  -   id
  -   email \*
  -   password \*
  -   name \*
  -   address \*
  -   phoneNumber \*
  -   description \*
  -   role
  -   recoverCode
  -   createdAt

  #### Animals

  -   id
  -   type \*
  -   breed \*
  -   name \*
  -   age \*             /* in months */
  -   gender \*
  -   description \*
  -   place \*
  -   adopted \*
  -   animalShelterId \*
  -   createdAt

  #### PhotosShelter

  -   id
  -   url \*
  -   animalShelterId \*

  #### PhotosAnimals

  -   id
  -   url \*
  -   animalId \*


## ENDPOINTS


-   GET - [/adoptaun/animals]   - Retorna el listado de todos los animales registrados en la BDD. / Returns the list of all the animals registered in the DB.
-   GET - [/adoptaun/shelters]  - Retorna el listado de todas las protectoras de animales registradas en la BDD. / Returns the list of all animal protectors registered in the DB.
-   GET - [/adoptaun/shelters/:id]  - Retorna los datos una protectora de animales según su id. / Returns the data of an animal shelter according to its id.
-   GET - [/adoptaun/animals?type=cat&gender=male&age=10&breed=siamese&location=vigo]   - Retorna un listado los datos de los animales que coincidan con los filtros aplicados. / Returns a list with the data of the animals that match the applied filters


-   POST - [/adoptaun/register]   - Registra un usuario en la aplicación. / register a user in the application.
-   POST - [/adoptaun/login]  - Login de un usuario. / Login of a user.
-   POST - [/adoptaun/profile/add_animal]   - Añade un los datos de un nuevo animal. / Add a data of a new animal. *WITH CREDENTIALS*


-   PUT - [/adoptaun/users]   - Modifica los datos de un usuario en concreto. / Modify the data of a specific user. *WITH CREDENTIALS*
-   PUT - [/adoptaun/animals/:id]   - Modifica los datos de un animal en concreto segun su id. / Modify the data of a specific animal according to its id. *WITH CREDENTIALS*
-   PUT - [/adoptaun/users/modPass]   - Modifica la contraseña de un usuario. / Modify a user's password. *WITH CREDENTIALS*


-   DELETE - [/adoptaun/animals/:id]  - Borra todos los datos de un animal en concreto segun su id. / Delete all the data of a specific animal according to its id. *WITH CREDENTIALS*



**DETAILS ENDPOINTS**



-   GET - [/adoptaun/animals] Example:

  return list of all animals like this:

    [
    {
        "id": 5,
        "type": "cat",
        "breed": "siamese",
        "name": "michi",
        "age": "14",                     /* in months */
        "gender": "female",
        "description": "michi is a very affectionate and very cheerful brown cat",
        "photo": "photo_animal.jpg",
        "place": "vigo",
        "adopted": "no",
        "animalShelterId": "2",
        "createdAt": "2021-04-03"
    },

    {
        "id": 3,
        "type": "dog",
        "breed": "Cocker Spaniel",
        "name": "rufus",
        "age": "28",                     /* in months */
        "gender": "male",
        "description": "Rufus is a very affectionate and very cheerful black dog",
        "photo": "photo_animal.jpg",
        "place": "vigo",
        "adopted": "no",
        "animalShelterId": "1",
        "createdAt": "2021-07-03"
    }
    ]

-   GET - [/adoptaun/shelters] -Example:

   return list of all shelters like this:

    [
    {
        "id": 1,
        "email": "shelter1@gmail.com",
        "name": "Bai Sen Pulgas",
        "photo": "photo_animal.jpg",
        "address": "Rúa de Vigo 2",
        "phoneNumber": "+34 986 60 60 60 ",
        "description": "BAI.SENPULGAS is a non-profit animal protection association, whose purpose is to help animals in situations of abuse or abandonment",
        "createdAt": "2011/05/03"
    },
    {
        "id": "2",
        "email": "shelter2@gmail.com",
        "name": "Refugio de Animales Abandonados de Vigo",
        "photo": "photo_animal.jpg",
        "address": "Subida á Madroa, 69, 71, 36317 Vigo, Pontevedra",
        "phoneNumber": "+34 986 45 22 65 ",
        "description": "Protectora de Animales Abandonados de Vigo is a non-profit animal protection association, whose purpose is to help animals in situations of abuse or abandonment",
        "createdAt": "1980/05/05"
    }
    ]


-   GET - [/adoptaun/shelters/:id] - Retorna los datos una protectora de animales según su id. / Returns the data of an animal shelter according to its id.

  You just have to send ,in the url, the id of the shelter you want to show.

  Output example:

    {
        "id": 2,
        "email": "shelter2@gmail.com",
        "name": "Refugio de Animales Abandonados de Vigo",
        "photo": "photo_animal.jpg",
        "address": "Subida á Madroa, 69, 71, 36317 Vigo, Pontevedra",
        "phoneNumber": "+34 986 45 22 65 ",
        "description": "Protectora de Animales Abandonados de Vigo is a non-profit animal protection association, whose purpose is to help animals in situations of abuse or abandonment",
        "createdAt": "1980/05/05"
    }


-   GET - [/adoptaun/animals?type=cat&gender=male&breed=siamese&location=vigo] - Retorna un listado los datos de los animales que coincidan con los filtros aplicados en la url. / Returns a list with the data of the animals that match the applied filters in the url.

  Output example:

    [
    {
        "id": 7,
        "type": "cat",
        "breed": "siamese",
        "name": "mick",
        "age": "12",                     /* in months */
        "gender": "male",
        "description": "mick is a very affectionate and very cheerful brown cat",
        "photo": "photo_animal.jpg",
        "place": "vigo",
        "adopted": "no",
        "animalShelterId": "2",
        "createdAt": "2021-04-03"
    },

    {
        "id": 9,
        "type": "cat",
        "breed": "siamese",
        "name": "dion",
        "age": "23",                     /* in months */
        "gender": "male",
        "description": "Dion is a very affectionate and very cheerful black dog",
        "photo": "photo_animal.jpg",
        "place": "vigo",
        "adopted": "no",
        "animalShelterId": "1",
        "createdAt": "2021-07-03"
    }
    ]



-   POST - [/adoptaun/register] - Registra un usuario en la aplicación. / register a user in the application. Example:

  You have to send this JSON format :

    {
        "name": "bai senpulgas",
        "email": "shelter2@gmail.com",
        "password": "1234",
    }

-   POST - [/adoptaun/login] - Loguea a un usuario. / Login a user. Example:

  You have to send this JSON format :

    {
        "email": "shelter2@gmail.com",
        "password": "1234",
    }

-   POST - [/adoptaun/profile/add_animal] - Añade un los datos de un nuevo animal. / Add a data of a new animal. *WITH CREDENTIALS*

  You have to send this JSON format :

    {
        "type": "cat",
        "breed": "siamese",
        "name": "dion",
        "age": "23",                     /* in months */
        "gender": "male",
        "description": "Dion is a very affectionate and very cheerful black dog",
        "place": "vigo",
        "photo": "photo_animal.jpg",
        "adopted": "no",
        "animalShelterId": "1",
    }

-   PUT - [/adoptaun/user] - Modifica los datos de un usuario. / Modify the data of a specific user. *WITH CREDENTIALS* Example:

  You have to send this JSON format modifying what you want :

    {
        "name": "bai senpulgas",
        "email": "shelter2@gmail.com",
        "description": "BAI SENPULGAS is a non-profit animal protection association, whose purpose is to help animals in situations of abuse or abandonment",
        "phoneNumber": " +34 986 60 60 60 ",
        "address": "Rúa de Vigo 2",
        "photo": "photo_shelter.webp"
    }


-   PUT - [/adoptaun/animals/:id] - Modifica los datos de un animal. / Edit a book. *WITH CREDENTIALS* Example:

  You just have to send ,in the url, the id of the book that you want to modify.
  You have to send this JSON format modifying what you want :

    {
        "type": "cat",
        "breed": "siamese",
        "name": "dion",
        "age": "23",                     /* in months */
        "gender": "male",
        "description": "Dion is a very affectionate and very cheerful black dog",
        "place": "vigo",
        "photo": "photo_animal.jpg",
        "adopted": "no",
        "animalShelterId": "1",

    }


-   PUT - [/adoptaun/users/modPass] - Modifica la contraseña de un usuario. / Modify a user's password. *WITH CREDENTIALS* Example:

  You have to send this JSON format modifying what you want :

    {
        "password": "0000",
        "new_password": "1234",
    }

-   DELETE - [/adoptaun/animals/:id] - Borra todos los datos de un animal en concreto segun su id. / Delete all the data of a specific animal according to its id. *WITH CREDENTIALS*

  You just have to send ,in the url, the id of the book you want to delete.
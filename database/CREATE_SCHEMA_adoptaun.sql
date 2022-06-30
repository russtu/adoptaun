DROP DATABASE IF EXISTS adoptaun;
CREATE SCHEMA `adoptaun`;
USE adoptaun;
CREATE TABLE adoptaun.animal_shelters (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL,
  name VARCHAR(50) NOT NULL,
  address TEXT(100) NOT NULL,
  phone_number VARCHAR(50) NOT NULL,
  description TEXT NOT NULL,
  role ENUM("admin", "normal") DEFAULT "normal" NOT NULL,
  recover_code VARCHAR(100),
  created_at DATETIME NOT NULL
);
CREATE TABLE adoptaun.animals (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  type VARCHAR(50) UNIQUE NOT NULL,
  breed VARCHAR(50) NOT NULL,
  name VARCHAR(50) NOT NULL,
  age VARCHAR(50) NOT NULL,
  gender VARCHAR(50) NOT NULL,
  description TEXT NOT NULL,
  place VARCHAR(50) NOT NULL,
  adopted BOOLEAN NOT NULL,
  created_at DATETIME NOT NULL,
  animalshelter_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (animalshelter_id) REFERENCES animal_shelters(id)
);

CREATE TABLE adoptaun.photos_shelters (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  url VARCHAR(255) NOT NULL,
  animalshelter_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (animalshelter_id) REFERENCES animal_shelters(id)
);

CREATE TABLE adoptaun.photos_animals (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  url VARCHAR(255) NOT NULL,
  animal_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (animal_id) REFERENCES animals(id)
);





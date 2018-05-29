DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id int(10) NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(50) NULL,
  devoured Boolean DEFAULT false,
  PRIMARY KEY (id)
);

select * From burgers;
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE products(
item_id INT AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(45) NOT NULL,
devoured TINYINT(1) NOT NULL,
price TIMESTAMP(my_datetime) NOT NULL,
  primary key(item_id)
);


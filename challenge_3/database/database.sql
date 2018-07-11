CREATE DATABASE IF NOT EXISTS checkout;

USE checkout;

CREATE TABLE IF NOT EXISTS f1 (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  email varchar(50) NOT NULL,
  password varchar(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS f2 (
  id int NOT NULL AUTO_INCREMENT,
  line1 varchar(100) NOT NULL,
  line2 varchar(50),
  city varchar(50) NOT NULL,
  state varchar(50) NOT NULL,
  shipzip varchar(20) NOT NULL,
  phonenumber varchar(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS f3 (
  id int NOT NULL AUTO_INCREMENT,
  creditcardnumber varchar(50) NOT NULL,
  expirydate varchar(10) NOT NULL,
  cvv varchar(10) NOT NULL,
  billzip varchar(10) NOT NULL
);
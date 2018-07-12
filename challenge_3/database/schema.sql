DROP DATABASE IF EXISTS checkout;

CREATE DATABASE checkout;

USE checkout;

CREATE TABLE f1 (
  id INTEGER NOT NULL AUTO_INCREMENT,
  customer_name varchar(50) NOT NULL,
  customer_email varchar(50) NOT NULL,
  customer_password varchar(50) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE f2 (
  id INTEGER NOT NULL AUTO_INCREMENT,
  line1 varchar(100) NOT NULL,
  line2 varchar(50),
  city varchar(50) NOT NULL,
  state varchar(50) NOT NULL,
  shipzip varchar(20) NOT NULL,
  phonenumber varchar(20) NOT NULL,
  customer_id INTEGER NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(customer_id) REFERENCES f1(id)
);

CREATE TABLE f3 (
  id INTEGER NOT NULL AUTO_INCREMENT,
  creditcardnumber varchar(50) NOT NULL,
  expirydate varchar(10) NOT NULL,
  cvv varchar(10) NOT NULL,
  billzip varchar(10) NOT NULL,
  customer_id INTEGER NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(customer_id) REFERENCES f1(id)
);
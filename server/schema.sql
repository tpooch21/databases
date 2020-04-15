CREATE DATABASE IF NOT EXISTS chat;

USE chat;

CREATE TABLE user (
  id INT(11) AUTO_INCREMENT,
  username VARCHAR(200) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id INT(11) AUTO_INCREMENT,
  roomname VARCHAR(200) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id INT(11) AUTO_INCREMENT,
  messages VARCHAR(200) NOT NULL,
  roomID INT(11) NOT NULL,
  userID INT(11) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (roomID) REFERENCES rooms(id),
  FOREIGN KEY (userID) REFERENCES user(id)
);

/* Create other tables and define schemas for them here! */


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
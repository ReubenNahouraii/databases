DROP DATABASE if exists chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  userId int not null auto_increment,
  name varchar(255),
  primary key (userId)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  objectId int not null auto_increment,
  message varchar(255),
  userId int, 
  roomname char(30),
  primary key (objectId)
  -- foreign key (userId) references users (userId)uuu
);

/* Create other tables and define schemas for them here! */


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

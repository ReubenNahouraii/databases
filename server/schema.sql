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
  messageId int not null auto_increment,
  message varchar(255),
  userId int, 
  primary key (messageId)
  -- foreign key (userId) references users (userId)
);

/* Create other tables and define schemas for them here! */


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

CREATE DATABASE history;
USE history;

CREATE TABLE historyList(
    id integer PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    url VARCHAR(2083),
    emotion VARCHAR(15)
);

-- INSERT INTO historyList(title, url, emotion)
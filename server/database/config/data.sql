
BEGIN;

DROP TABLE IF EXISTS users,orders CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(55) NOT NULL,
  location VARCHAR(125) NOT NULL,
  number INT NOT NULL
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  Type VARCHAR(55) NOT NULL,
  quantity INT NOT NULL,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
INSERT INTO users (name, location,number) VALUES ('mostafa','Gaza',0592253301) , ( 'zuhdi','Gaza',0592253301);

COMMIT;
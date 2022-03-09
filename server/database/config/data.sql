
BEGIN;

DROP TABLE IF EXISTS users,orders,menu CASCADE;

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
CREATE TABLE menu (
  id SERIAL PRIMARY KEY,
  name VARCHAR(55) NOT NULL,
  price INT NOT NULL
);
INSERT INTO menu (name, price) VALUES ('لقيمات بالنوتيلا',8),('لقيمات باللوتس',10),('لقيمات بالنوتيلا والايس كريم',10) ,('كريب بالنوتيلا',10),('بان كيك بالنوتيلا',12),('نوتيلا مولتن كيك',10);


INSERT INTO users (name, location,number) VALUES ('mostafa','Gaza',0592253301) , ( 'zuhdi','Gaza',0592253301);

COMMIT;
BEGIN;

DROP TABLE IF EXISTS users,orders,menu CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(55) NOT NULL,
  location VARCHAR(125) NOT NULL,
  number INT NOT NULL
);

CREATE TABLE menu (
  id SERIAL PRIMARY KEY,
  name VARCHAR(55) NOT NULL,
  price INT NOT NULL
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  users_id INT,
  FOREIGN KEY (users_id) REFERENCES users(id),
  menu_id INT,
  FOREIGN KEY (menu_id) REFERENCES menu(id)
);
INSERT INTO menu (name, price) VALUES ('لقيمات بالنوتيلا',8),('لقيمات باللوتس',10),('لقيمات بالنوتيلا والايس كريم',10) ,('كريب بالنوتيلا',10),('بان كيك بالنوتيلا',12),('نوتيلا مولتن كيك',10);


COMMIT;
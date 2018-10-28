-- Drops the bamazon_db if it exists currently --
DROP DATABASE IF EXISTS bamazon_db;
-- Creates the "bamazon_db" database --
CREATE DATABASE bamazon_db;

-- Make it so all of the following code will affect bamazon_db --
USE bamazon_db; 

CREATE TABLE products (
-- Create a numeric column called "item_id" which automatically increments and cannot be null --
  item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
  -- Make a string column called "product_name" which cannot contain null --
  product_name VARCHAR(50) NOT NULL,
  -- Make a string column called "department_name" which cannot contain null --
  department_name VARCHAR(50) NOT NULL,
  -- Make an numeric column called "price" --
  price DECIMAL(10,2) NOT NULL,
  -- Make an numeric column called "stock_quantity" --
  stock_quantity INTEGER(20) NOT NULL,
  -- Set the primary key of the table to id --
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Table Cloth", "Kitchen Items", 10.00, 15), 
("Blanket", "Bedroom Items", 15.00, 20),
("Shower Curtain", "Bathroom Items", 5.00, 20),
("Pillow", "Bedroom Items", 7.00, 18),
("Desk", "Home Office Items", 200.00, 10),
("Chair", "Home Office Items", 150.00, 18),
("Sofa", "Living Room Items", 250.00, 10),
("Computer", "Electronics", 500.00, 40),
("Printer", "Electronics", 200.00, 30),
("Ipad", "Electronics", 150.00, 60);
SELECT * from products;
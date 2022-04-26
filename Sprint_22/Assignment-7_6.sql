-- Step 1
CREATE TABLE customers (
    id INT AUTO_INCREMENT PRIMARY KEY UNIQUE,
    name varchar(255),
    age INT,
    gender varchar(255),
    favorite_sport varchar(255)
);

-- Step 2
SELECT * FROM customers;

-- Step 3
SELECT * FROM customers WHERE gender = "female";

-- Step 4
SELECT * FROM customers WHERE age BETWEEN 20 AND 25;

-- Step 5
SELECT * FROM customers WHERE age >= 30;

-- Step 6
SELECT * FROM customers WHERE favorite_sport = "Football";

-- Step 7
DELETE FROM customers WHERE name = "John";
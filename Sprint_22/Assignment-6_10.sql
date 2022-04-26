-- Step 1
ALTER TABLE employees RENAME ecommerce_employees;

-- Step 2
DELETE FROM products WHERE id = 4;

-- Step 3
INSERT INTO products (title,description,price,stock) VALUES
('Basket', 'Stationary recycling', 5.00 , 20),
('Calculator', 'Math Helper Device', 10.00, 50);

-- Step 4
SELECT * FROM products;

-- Step 5
UPDATE ecommerce_employees SET occupation = "Front End Developer" WHERE id = 3;

-- Step 6
DELETE FROM products WHERE id = 1;

-- Step 7
UPDATE products SET stock = 25 WHERE id = 6;



-- Step 1
ALTER TABLE customers ADD(
customer_country VARCHAR(255),
customer_city VARCHAR(255)
);

-- Step 2
INSERT INTO customers (customer_country, custommer_city) VALUES 
('Germany', 'Berlin'),
('Spain', 'Madrid'),
('France', 'Paris');

-- Step 3
SELECT * FROM customers WHERE NOT customer_country = "Germany";

-- Step 4
SELECT * FROM customers WHERE customer_country = "Spain" AND customer_city = "Madrid";

-- Step 5
SELECT * FROM customers WHERE customer_country = "Spain" AND NOT customer_city = "Madrid"; 

-- Step 6
DELETE FROM customers WHERE customer_country = "France";
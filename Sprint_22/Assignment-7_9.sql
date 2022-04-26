-- Step 1
INSERT INTO customers (name,age,gender,favorite_sport) VALUES
("Zasz", 37, "male", "Fencing"),
("Ivy", 28, "female", "Basketball"),
("Arthur", 28, "male", "Football"),
("Myra", 22, "female", "Swimming"),
("Clark", 44, "female", "Swimming");

-- Step 2 
SELECT * FROM customers WHERE favorite_sport = "basketball" OR favorite_sport = "motorsport";
SELECT * FROM customers WHERE favorite_sport IN ("basketball", "motorsport");

-- Step 3 
SELECT * FROM customers WHERE name = "John" AND name = "Jannet";
--SELECT * FROM customers WHERE name IN ("John", "Jannet");

-- Step 4
SELECT (id) FROM customers WHERE age = 21 OR age = 18;
--SELECT (id) FROM customers WHERE name IN (21, 18);

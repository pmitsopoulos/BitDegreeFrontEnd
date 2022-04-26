-- Step 1
CREATE DATABASE my_company;
USE my_company;

-- Step 2
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY UNIQUE,
    name VARCHAR(255),
    surname VARCHAR(255), 
    gender VARCHAR(255), 
    age INT,
    job_title VARCHAR(255)
);

INSERT INTO employees(name, surname, gender, age, job_title) VALUES
("John","Whick","male",23, "Senior Developer"),
("Tom","Riddle","male",27, "CTO"),
("Jannete","Anniston","female",25, "Head Of Marketing"),
("Mark","Tob","male", 42, "SEO Specialist"),
("Toby","Marker","male",24, "Sales Representive"),
("Ana","Leviev","female",32, "Team Lead"),
("Joanna","Krux","female",50, "Marketeer"),
("Ali","Porter","male",18, "Junior Web Developer"),
("Victoria","Lowe","female",37, "Data Scientist"),
("Ona","Maze","female",37, "CEO");


-- Step 3
ALTER TABLE employees ADD (
    salary DECIMAL(10,2)
);

UPDATE employees SET salary = 3200 WHERE id = 1;
UPDATE employees SET salary = 3800 WHERE id = 2;
UPDATE employees SET salary = 3300 WHERE id = 3;
UPDATE employees SET salary = 3000 WHERE id = 4;
UPDATE employees SET salary = 1500 WHERE id = 5;
UPDATE employees SET salary = 2000 WHERE id = 6;
UPDATE employees SET salary = 2200 WHERE id = 7;
UPDATE employees SET salary = 1100 WHERE id = 8;
UPDATE employees SET salary = 3500 WHERE id = 9;
UPDATE employees SET salary = 4000 WHERE id = 10;

-- Step 4
SELECT name,surname,id FROM employees WHERE salary >= 2500;

-- Step 5
SELECT AVG(salary) as average_salary FROM employees; 

-- Step 6
SELECT AVG(salary) as average_female_salary FROM employees WHERE gender = "female"; 

-- Step 7
SELECT SUM(salary) as monthly_salaries FROM employees;

-- Step 8
UPDATE employees SET
job_title = "Junior Web Developer",
-- Step 9
salary = salary * 0.80
WHERE job_title = "Sales Representive";

-- Step 10
DELETE FROM employees WHERE id = 7;

-- Step 11
SELECT * FROM employees WHERE age BETWEEN 50 AND 60;